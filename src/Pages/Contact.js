import React from 'react'

const Contact = () => {
    return (
        <div>
            <div >
                <img style={{height:400}} className="w-screen" src="assests/green.jpeg" alt="logo"/>
                <div>
                <p className="text-white text-4xl font-bold -mt-96 flex ml-12">Have a Questions?</p>
                <p className="text-gray-500 test-lg font-lg flex ml-12">we help you go further then you ever dreamed,24/7</p>
                </div>
                <div className="flex flex-row justify-center gap-52 mt-32">
                    <img className="h-16" src="assests/logo14.png" alt="logo"/>
                    <img className="h-16" src="assests/usss.png" alt="logo"/>
                    <img className="h-16" src="assests/msg.png" alt="logo"/>
                    <img className="h-16" src="assests/logo13.png" alt="logo"/>
                </div>
                <div className="flex flex-row gap-36 justify-center text-white">
                    <p>+91 6304258997<br/>India</p>
                    <p>+14698765365<br/>Usa</p>
                    <p>hello@digital-lync.com<br/>Email</p>
                    <p>live chat</p>
                </div>
            </div>
        </div>
    )
}

export default Contact;
