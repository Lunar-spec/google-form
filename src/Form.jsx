import { AiOutlineCloudSync } from 'react-icons/ai'
const Form = () => {

    return (
        <form className="flex flex-col justify-start items-start px-4 h-screen w-1/2">
            <div className=" flex flex-col px-4 bg-white rounded-md justify-center items-start w-full shadow-sm border-purple-600 border-t-8 space-y-2 drop-shadow-md">
                <h1 className=" text-3xl font-semibold text-gray-700 border-b-2 w-full p-2 pb-4">Assignment Task</h1>
                <div className=" m-0 flex justify-between w-full items-center">
                    <p className=" text-gray-700 font-semibold">lorem@gmail.com</p>
                    <p className=" text-blue-500"><a href="#">Switch account</a></p>
                    <AiOutlineCloudSync className='text-gray-500 text-4xl mr-3' />
                </div>
                <p className=" text-gray-400 border-b-2">The name and photo associated with your Google account will be recorded when you upload files and submit this form. Your email is not part of your response.</p>
                <p className=' text-red-600 font-normal'>* Indicates required question</p>
            </div>

            <div className=" flex flex-col px-4 bg-white rounded-md justify-center items-start w-full shadow-sm mt-4 drop-shadow-md  space-y-2">
                <h1 className=" text-xl text-gray-800 w-full p-2">MCQ<span className='text-red-400 text-4xl'>*</span></h1>
                <div className='flex flex-col ml-0'>
                    <div>
                        <input type="radio" name="option" className='mr-2' />Option 1
                    </div>
                    <div>
                        <input type="radio" name="option" className='mr-2' />Option 1
                    </div>
                    <div>
                        <input type="radio" name="option" className='mr-2' />Option 1
                    </div>
                </div>
            </div>

            <div className=" flex flex-col px-4 bg-white rounded-md justify-center items-start w-full shadow-sm mt-4 drop-shadow-md  space-y-2">
                <h1 className=" text-xl text-gray-800 w-full p-2">Checkbox<span className='text-red-400 text-4xl'>*</span></h1>
                <div className='flex flex-col ml-0'>
                    <div>
                        <input type="checkbox" name="option" className='mr-2' />Option 1
                    </div>
                    <div>
                        <input type="checkbox" name="option" className='mr-2' />Option 1
                    </div>
                    <div>
                        <input type="checkbox" name="option" className='mr-2' />Option 1
                    </div>
                </div>
            </div>

            <div className=" flex flex-col px-4 bg-white rounded-md justify-center items-start w-full shadow-sm mt-4 drop-shadow-md  space-y-2">
                <h1 className=" text-xl text-gray-800 w-full p-2">Short Answer<span className='text-red-400 text-4xl'>*</span></h1>
                <div className='flex flex-col ml-0'>
                    <div>
                        <input type="text" name="option" className='mr-2 border-b-2 w-full outline-none focus:border-blue-700' placeholder='Your answer' />
                    </div>
                </div>
            </div>

            <div className=" flex flex-col px-4 bg-white rounded-md justify-center items-start w-full shadow-sm mt-4 drop-shadow-md  space-y-2">
                <h1 className=" text-xl text-gray-800 w-full p-2">Paragraph<span className='text-red-400 text-4xl'>*</span></h1>
                <div className='flex flex-col ml-0 w-full'>
                    <textarea cols={0} type="text" name="option" className='mr-2 border-b-2 w-full outline-none' placeholder='Your answer' />
                </div>
            </div>

            <div className=" flex flex-col px-4 bg-white rounded-md justify-center items-start w-full shadow-sm mt-4 drop-shadow-md  space-y-2">
                <h1 className=" text-xl text-gray-800 w-full p-2">Drop Down<span className='text-red-400 text-4xl'>*</span></h1>
                <div className='flex flex-col ml-0 w-full'>
                    <select name="option" className='p-2 outline-none w-1/4'>
                        <option className='p-2 text-gray-400 outline-none border-b-gray-500'>Choose</option>
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                        <option value="3">Option 3</option>
                    </select>
                </div>
            </div>

            <div className=" flex flex-col px-4 bg-white rounded-md justify-center items-start w-full shadow-sm mt-4 drop-shadow-md  space-y-2">
                <h1 className=" text-xl text-gray-800 w-full p-2">File<span className='text-red-400 text-4xl'>*</span></h1>
                <div className='flex flex-col ml-0 w-full'>
                    <input type="file" name="file upload" className='outline-none border-none' />
                </div>
            </div>
            <div className='flex justify-evenly w-full pt-5'>
                <button type="submit" className='flex justify-start float-left p-2 pr-6 pl-6 bg-purple-700 rounded text-white font-semibold'>Submit</button>
                <div className='flex items-center w-1/2'>
                    <hr className='w-full border-green-600 border-2 bg-green-600 rounded-lg'/>
                    <span className='w-full text-center'>Page 1 of 1</span>
                </div>
                <button type="reset" className='text-purple-600 transition-all hover:bg-purple-100/80 p-2 rounded pr-4 pl-4'>Clear</button>
            </div>
            <span className='text-sm m-0 text-gray-500/80'>Never submit passwords through Google Forms.</span>
            <span className='text-sm text-gray-500'>This content is neither created nor endorsed by Google. Report Abuse -<a href="#" className='underline'>Terms of Service</a>-<a href="#" className='underline'>Privacy Policy</a></span>
            <div className='flex justify-center items-center'>
                <span className='text-2xl text-gray-500 font-bold'>Google</span>
                <span className='text-lg'>Forms</span>
            </div>
        </form>
    )
}

export default Form