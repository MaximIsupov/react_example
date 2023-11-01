import BlockMark from '../../../components/block_mark/BlockMark.jsx'
import ContactUsCard from './ContactUsCard.jsx'
import ContactUsForm from './ContactUsForm.jsx'
import './ContactUs.css'

function ContactUs(){
	return(
		<div className="contact_us container">
			<div className="contact_us__col">
				<BlockMark backgroundColor="#FFCC4A" color="black" title="Process" />
				<div className="contact_us__title">
					Contact Us. It’s Easy.
				</div>
				<div className="contact_us__text">
					Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative.
				</div>
				<div className="contact_us__cards">
					<ContactUsCard 
						image='views/Home/contact_us_icon_1.png'
						top="Call Today"
						bottom="+1 800 100 900"
					/>
					<ContactUsCard 
						image='views/Home/contact_us_icon_2.png'
						top="Monday To Friday"
						bottom="9AM - 5PM"
					/>
					<ContactUsCard 
						image='views/Home/contact_us_icon_3.png'
						top="USA Office"
						bottom="195 Devonshire St Boston, MA 02110"
					/>
				</div>
			</div>
			<div className="contact_us__col">
				<ContactUsForm />
			</div>
		</div>
	)
}

export default ContactUs;