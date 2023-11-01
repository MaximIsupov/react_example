function ContactUsForm(){
	return(
		<form className="contact_us__form">
			<div className="contact_us__form_row">
				<div className="contact_us__form_col">
					<label for="contact_us__name">Full Name</label>
					<input type="text" name="name" id="contact_us__name" placeholder="john david" />
				</div>
				<div className="contact_us__form_col">
					<label for="contact_us__email">Email</label>
					<input type="text" name="email" id="contact_us__email" placeholder="consult@mail.com" />
				</div>
			</div>
			<div className="contact_us__form_row">
				<div className="contact_us__form_col">
					<label for="contact_us__phone">Phone</label>
					<input type="number" name="phone" id="contact_us__phone" placeholder="+008 654 231" />
				</div>
				<div className="contact_us__form_col">
					<label for="contact_us__company">Company(optional)</label>
					<input type="text" name="company" id="contact_us__company" placeholder="yourcompany.com" />
				</div>
			</div>
			<div className="contact_us__form_row">
				<div className="contact_us__form_textarea">
					<label for="contact_us__message">Message</label>
					<textarea 
						rows='5'
						name="message" 
						id="contact_us__message" 
						placeholder="Briefly tell us about your project and your current goals. How can we help you?"
					/>
				</div>
			</div>
			<div className="btn contact_us__btn">
				Send Message
			</div>
		</form>
	)
}

export default ContactUsForm;