import React, { useState } from 'react'
import {
    UilClipboardNotes,
} from '@iconscout/react-unicons'
import {  toast } from 'react-toastify';


function Interface() {

    const [password, setPassword] = useState('');
    const [passwordStr, setPasswordStr] = useState(25);
    const [includeUpperCase, setIncludeUpperCase] = useState(true);
    const [includeLowerCase, setIncludeLowerCase] = useState(true);
    const [includeNum, setIncludeNum] = useState(true);
    const [includeSym, setIncludeSym] = useState(true);
    const [includeSca, setIncludeSca] = useState(true);
    
    const charactersUpperCase='QWERTYUIOPASDFGHJKLZXCVBNM';
    const charactersLowerCase='qwertyuiopasdfghjklzxcvbnm';
    const symbolList='~`!@#$%^&*()_-+={[}]|\:;<,>.?/';
    const numberList='123456789';
    
    let scaList = (includeSca) ? (includeUpperCase && includeSca) ? (includeUpperCase && includeLowerCase && includeSca) ? 'ÖÄÅÆØæøöäå' : 'ÖÄÅÆØ' : 'æøöäå' : null;
    
    const handlePasswordGeneration = () => {
        if (!includeUpperCase && !includeLowerCase && !includeNum && !includeSym && !includeSca) {
            toast.info('Check one of the boxes to create a password.')
        }
        else {
            let characterList="";
            if(includeUpperCase) {
                characterList=characterList+charactersUpperCase; 
            };
            if(includeLowerCase) {
                characterList=characterList+charactersLowerCase; 
            };
            if(includeNum) {
                characterList=characterList+numberList; 
            };
            if(includeSym) {
                characterList=characterList+symbolList; 
            };
            if(includeSca) {
                characterList=characterList+scaList; 
            };
            setPassword(createPassword(characterList));
            toast.success('password generated!');

        };
    };

    const createPassword = (characterList) => {
    let password = "";
    const characterListLength = characterList.length; 
    for (let i = 0; i < passwordStr; i++) {
        const characterIndex = Math.round(Math.random() * characterListLength);
        password = password + characterList.charAt(characterIndex);
    };
    setPassword(password)
    return password;
    };

    const copyToClipboard = (e) => {
        navigator.clipboard.writeText(password);
        toast.success('Password Copied!');
    };

  return (
    <div className='w-full max-w-lg text-white'>
        <div className='flex flex-row'>
            <header  className='row'>
                <h1 className='uppercase text-lg'>Password Generator</h1>
            </header>
        </div>
        <div className='flex-row'>
            <div className=' w-full max-w-lg'>
                <div className='flex flex-row' >
                    <input type='text' className=' w-full md:w-3/4 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500' defaultValue={password} onChange={(e) => setPassword(e.target.value)}/>
                    <button className='flex' >    
                        <UilClipboardNotes className=' cursor-pointer transition ease-out hover:scale-125' size={50} onClick={copyToClipboard}/>
                    </button>
                </div>

                <div className='form-group'>
                    <div className='mb-2'>
                        <label htmlFor='password-str' className='capitalize w-full md:w-1/4 '>Number of Characters (Maximum of 50)</label>
                        <input className=' w-full md:w-1/4  ml-2 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none' type="number" defaultValue={passwordStr} onChange={(e) => setPasswordStr(e.target.value)} id='password-str' name='password-str' max='50' min='6'/>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor='uppercase-cha' className='capitalize'>include uppercase characters</label>
                        <input className=' ml-2' checked={includeUpperCase} onChange={(e) => setIncludeUpperCase(e.target.checked)} type="checkbox" id='uppercase-cha' name='uppercase-cha'/>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor='lowercase-cha' className='capitalize'>include lowercase characters</label>
                        <input className=' ml-2' checked={includeLowerCase} onChange={(e) => setIncludeLowerCase(e.target.checked)} type="checkbox" id='lowercase-cha' name='lowercase-cha'/>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor='include-num' className='capitalize'>include numbers</label>
                        <input className=' ml-2' checked={includeNum} onChange={(e) => setIncludeNum(e.target.checked)} type="checkbox" id='include-num' name='include-num'/>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor='include-sym' className='capitalize'>include symbols</label>
                        <input className=' ml-2' checked={includeSym} onChange={(e) => setIncludeSym(e.target.checked)} type="checkbox" id='include-sym' name='include-sym'/>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor='include-sca' className='capitalize'>include scandinavian</label>
                        <input className=' ml-2' checked={includeSca} onChange={(e) => setIncludeSca(e.target.checked)} type="checkbox" id='include-sca' name='include-sca'/>
                    </div>
                </div>
                <button className=" capitalize h-10 px-9 font-semibold rounded-full border text-white bg-cyan-600 border-slate-200" onClick={handlePasswordGeneration}>
                    Generate Password!
                </button>
            </div>
        </div>
    </div>
  )
}

export default Interface