import image_1 from '../images/about_image_1.png'
import image_2 from '../images/about_image_2.jpg'
import icon_1 from '../images/about_icon_1.png'
import icon_2 from '../images/about_icon_2.png'

const AboutUs = () => {
    return (
        <div>
            <div className="bg-about-background-header bg-no-repeat bg-center w-full flex justify-center items-center h-[450px]">
                <h1 className="text-dark-blue text-5xl font-roboto font-bold">About Us</h1>
            </div>
            <main>
                <div className='flex justify-center mt-24'>
                    <img src={image_1} />
                    <div className='flex flex-col w-[900px]'>
                        <span className='font-yellowtail text-light-green text-3xl p-4'>About Us</span>
                        <span className='font-roboto font-bold text-dark-blue text-5xl p-4'>We do Creative
                            Things for Success</span>
                        <span className='text-xl w-4/5  p-4 text-light-black font-roboto '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</span>
                        <span className=' text-light-black font-roboto text-xl w-4/5 p-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</span>
                        <div className='flex justify-between'>
                            <div className='flex items-center p-4'>
                                <img src={icon_1} />
                                <span className='font-roboto font-bold text-xl ml-3'>Modern Agriculture
                                    Equipment
                                </span>
                            </div>
                            <div className='flex items-center'>
                                <img src={icon_2} />
                                <span className='font-roboto font-bold text-xl ml-3'>No growth hormones are used</span>
                            </div>
                        </div>
                        <button className='bg-dark-blue w-1/5 p-6 rounded-xl'>
                            <span className='text-white font-roboto font-bold'>
                                Explore More
                            </span>
                        </button>

                    </div>
                </div>
                <div className='flex justify-center mt-24'>
                    <div className='flex flex-col w-[900px]'>
                        <span className='font-yellowtail text-light-green text-3xl p-4'>Why Choose us?</span>
                        <span className='font-roboto font-bold text-dark-blue text-5xl p-4'>We do not buy from the
                            open market & traders.</span>
                        <span className='font-roboto text-light-black text-xl p-4'>Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard  the 1500s, when an unknown</span>
                        <div className='flex flex-col'>
                            <div className='rounded-xl bg-light-grey p-4 w-2/5'>
                                <span className='font-roboto text-xl text-dark-blue font-semibold'>
                                    100% Natural Product
                                </span>
                                </div>
                            <span className=''>Simply dummy text of the printing and typesetting industry Lorem Ipsum</span>
                            <div className='rounded-xl bg-light-grey p-4 w-2/5'>
                                <span className='font-roboto text-xl text-dark-blue font-semibold'>
                                Increases resistance
                                </span>
                            </div>
                        </div>
                    </div>
                    <img src={image_2} />

                </div>
            </main>
        </div>
    )
}
export default AboutUs