import { createRef, useState } from 'react'
import { AiOutlineCloudSync } from 'react-icons/ai'
import { FiUpload } from 'react-icons/fi';
import { BiErrorCircle } from 'react-icons/bi'

const Form = () => {
    const [content, setContent] = useState('');
    const [paracontent, setParacontent] = useState('');
    const [selectedOption, setSelectedOption] = useState('');
    const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);
    const [selectedFile, setSelectedFile] = useState(null);

    const [errors, setErrors] = useState({
        shortAnswer: false,
        paragraph: false,
        option: false,
        checkboxes: false,
        file: false,
    });

    const handleShortAnswerChange = (e) => {
        setContent(e.target.value);
        setErrors({ ...errors, shortAnswer: false });
    };

    const handleParagraphChange = (e) => {
        setParacontent(e.target.value);
        setErrors({ ...errors, paragraph: false });
    };

    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value);
        setErrors({ ...errors, option: false });
    };

    const handleCheckboxChange = (e) => {
        const value = e.target.value;
        if (selectedCheckboxes.includes(value)) {
            setSelectedCheckboxes(selectedCheckboxes.filter(item => item !== value));
        } else {
            setSelectedCheckboxes([...selectedCheckboxes, value]);
        }
        setErrors({ ...errors, checkboxes: false });
    };
    const fileInputRef = createRef();

    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
        setErrors({ ...errors, file: false });
    };

    const handleFileClick = () => {
        fileInputRef.current.click();
    };
    const handleSubmit = (e) => {
        e.preventDefault();

        if (content.trim() === '') {
            return setErrors({ ...errors, shortAnswer: true });
        }

        if (paracontent.trim() === '') {
            return setErrors({ ...errors, paragraph: true });
        }

        if (selectedOption === '') {
            return setErrors({ ...errors, option: true });
        }

        if (selectedCheckboxes.length === 0) {
            return setErrors({ ...errors, checkboxes: true });
        }

        if (!selectedFile) {
            return setErrors({ ...errors, file: true });
        }

        // Perform form submission logic
        window.location.reload(true);
    };

    return (
        <form className="flex flex-col justify-start items-start px-4 h-screen w-1/2" onSubmit={handleSubmit}>
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
                    <div className='flex justify-center items-center'>
                        <input
                            type="radio"
                            name="option"
                            className='mr-2'
                            value="Option 1"
                            checked={selectedOption === 'Option 1'}
                            onChange={handleOptionChange}
                        />
                        Option 1
                    </div>
                    <div className='flex justify-center items-center'>
                        <input
                            type="radio"
                            name="option"
                            className='mr-2'
                            value="Option 2"
                            checked={selectedOption === 'Option 2'}
                            onChange={handleOptionChange}
                        />
                        Option 2
                    </div>
                    <div className='flex justify-center items-center'>
                        <input
                            type="radio"
                            name="option"
                            className='mr-2'
                            value="Option 3"
                            checked={selectedOption === 'Option 3'}
                            onChange={handleOptionChange}
                        />
                        Option 3
                    </div>
                </div>
                {errors.option && selectedOption === '' && <p className="text-red-500 text-sm flex items-center"><BiErrorCircle className='text-4xl text-red-400' />* Please select an option</p>}
            </div>

            <div className=" flex flex-col px-4 bg-white rounded-md justify-center items-start w-full shadow-sm mt-4 drop-shadow-md  space-y-2">
                <h1 className=" text-xl text-gray-800 w-full p-2">Checkbox<span className='text-red-400 text-4xl'>*</span></h1>
                <div className='flex flex-col ml-0'>
                    <div className='flex items-center justify-center'>
                        <input
                            type="checkbox"
                            name="checkbox"
                            value="Option 1"
                            className='mr-2'
                            checked={selectedCheckboxes.includes('Option 1')}
                            onChange={handleCheckboxChange}
                        />Option 1
                    </div>
                    <div className='flex items-center justify-center'>
                        <input
                            type="checkbox"
                            name="checkbox"
                            value="Option 2"
                            className='mr-2'
                            checked={selectedCheckboxes.includes('Option 2')}
                            onChange={handleCheckboxChange}
                        />Option 2
                    </div>
                    <div className='flex items-center justify-center'>
                        <input
                            type="checkbox"
                            name="checkbox"
                            value="Option 3"
                            className='mr-2'
                            checked={selectedCheckboxes.includes('Option 3')}
                            onChange={handleCheckboxChange}
                        />Option 3
                    </div>
                </div>
                {errors.checkboxes && selectedCheckboxes === '' &&  <p className="text-red-500 text-sm flex items-center"><BiErrorCircle className='text-4xl text-red-400' />* Please select at least one option</p>}
            </div>

            <div className=" flex flex-col px-4 bg-white rounded-md justify-center items-start w-full shadow-sm mt-4 drop-shadow-md  space-y-2">
                <h1 className=" text-xl text-gray-800 w-full p-2">Short Answer<span className='text-red-400 text-4xl'>*</span></h1>
                <div className='flex flex-col ml-0'>
                    <div>
                        <input type="text" value={content} className='mr-2 border-b-2 w-full outline-none focus:border-blue-700' placeholder='Your answer' onChange={handleShortAnswerChange} />
                    </div>
                    {errors.shortAnswer && <p className="text-red-500 text-sm flex items-center"><BiErrorCircle className='text-4xl text-red-400' />* This field is empty</p>}
                </div>
            </div>

            <div className=" flex flex-col px-4 bg-white rounded-md justify-center items-start w-full shadow-sm mt-4 drop-shadow-md  space-y-2">
                <h1 className=" text-xl text-gray-800 w-full p-2">Paragraph<span className='text-red-400 text-4xl'>*</span></h1>
                <div className='flex flex-col ml-0 w-full'>
                    <textarea cols={0} value={paracontent} type="text" className='mr-2 border-b-2 w-full outline-none focus:border-blue-700' placeholder='Your answer' onChange={handleParagraphChange} />
                </div>
                {errors.paragraph && <p className="text-red-500 text-sm flex items-center"><BiErrorCircle className='text-4xl text-red-400' />* This field is empty</p>}
            </div>

            <div className=" flex flex-col px-4 bg-white rounded-md justify-center items-start w-full shadow-sm mt-4 drop-shadow-md  space-y-2">
                <h1 className=" text-xl text-gray-800 w-full p-2">Drop Down<span className='text-red-400 text-4xl'>*</span></h1>
                <div className='flex flex-col ml-0 w-full'>
                    <select name="option" className='p-2 outline-none w-1/4 border-gray-500/10 border-2 rounded'>
                        <option className='p-2 text-gray-400 outline-none border-b-gray-500'>Choose</option>
                        <option value="1" className='border-r-2 bg-slate-400/10'>Option 1</option>
                        <option value="2" className='border-r-2 bg-slate-400/10'>Option 2</option>
                        <option value="3" className='border-r-2 bg-slate-400/10'>Option 3</option>
                    </select>
                </div>
            </div>

            <div className={`flex flex-col px-4 bg-white rounded-md justify-center items-start w-full shadow-sm mt-4 drop-shadow-md space-y-2 ${errors.file ? 'border-red-500' : 'border-purple-600'}`}>
                <h1 className="text-xl text-gray-800 w-full p-2">
                    File<span className='text-red-400 text-4xl'>*</span>
                </h1>
                <div className='flex flex-col w-full'>
                    <div className="file-upload-icon flex ml-0 hover:bg-purple-100 rounded transition-all cursor-pointer" onClick={handleFileClick}>
                        <FiUpload className='text-purple-800 text-4xl' />
                        <span className='text-purple-700 font-semibold'>Insert file</span>
                    </div>
                    <input
                        type="file"
                        name="file"
                        ref={fileInputRef}
                        onChange={handleFileChange}
                        className={`hidden`}
                    />
                    {errors.file && <p className="text-red-500 text-sm flex items-center"><BiErrorCircle className='text-4xl text-red-400' />* Please upload a file</p>}
                </div>
            </div>
            <div className='flex justify-between w-full pt-5'>
                <button type="submit" className='flex justify-start float-left p-2 pr-6 pl-6 bg-purple-700 rounded text-white font-semibold'>Submit</button>
                <div className='flex items-center w-1/2'>
                    <hr className='w-full border-none bg-green-600 rounded-lg' />
                    <span className='w-full text-center'>Page 1 of 1</span>
                </div>
                <button type="reset" className='text-purple-600 transition-all hover:bg-purple-100/80 p-2 rounded pr-4 pl-4 font-semibold'>Clear form</button>
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