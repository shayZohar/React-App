const sendgrid = require('sendgrid');
const helper = sendgrid.mail;

const keys = require('../config/keys');

class Mailer extends helper.Mail {
	constructor({ subject, recipients }, content) {
		super();

		this.sgApi = sendgrid(keys.sendGridKey);
		this.from_email = new helper.Email('shayzohar8@gmail.com');
		this.subject = subject;
		this.body = new helper.Content('text/html', content);
		this.recipients = this.formatAddresses(recipients);

		//method from helper.Mail
		this.addContent(this.body);
		this.addClickTracking();
		this.addRecipients(this.recipients);
	}

	//formatting each email address with helper.Email
	formatAddresses(recipients) {
		return recipients.map(({ email }) => {
			return new helper.Email(email);
		});
	}

	//setting for sendgrid, just this is how it works
	addClickTracking() {
		const trackingSettings = new helper.TrackingSettings();
		const clickTracking = new helper.ClickTracking(true, true);
		trackingSettings.setClickTracking(clickTracking);
		this.addTrackingSettings(trackingSettings);
	}

	addRecipients(recipients) {
		const personalize = new helper.Personalization();
		this.recipients.forEach((recipient) => {
			personalize.addTo(recipient);
		});
		//base class method
		this.addPersonalization(personalize);
	}

	async send() {
		const request = this.sgApi.emptyRequest({
			method: 'POST',
			path: '/v3/mail/send',
			body: this.toJSON(),
        });
        
        const response =await this.sgApi.API(request);
        return response;
	}
}

module.exports = Mailer;
