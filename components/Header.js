import Image from 'next/image';
import {
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  SearchIcon,
  UsersIcon,
} from '@heroicons/react/solid';
import { useState } from 'react';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { useRouter } from 'next/router';

function Header({ placeholder, cls }) {
  const [searchInput, setSearchInput] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [noOfGuests, setNoOfGuests] = useState(1);
  const router = useRouter();

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const resetInput = () => {
    setSearchInput('');
    setStartDate(new Date());
    setEndDate(new Date());
    setNoOfGuests(1);
  };

  const search = () => {
    router.push({
      pathname: '/search',
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        noOfGuests,
      },
    });
  };

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: 'selection',
  };

  return (
    <div className=''>
      <header
        className={`md:${cls} fixed top-0 w-full z-50 grid grid-cols-3 bg-[#F7E7D8] shadow-md p-1`}
      >
        <div
          onClick={() => router.push('/')}
          className='relative flex items-center h-10 cursor-pointer my-auto py-0 md:py-9 ml-0 lg:ml-10'
        >
          <Image
            src='https://i.postimg.cc/VNgyyCMm/Heaven-on-earth.png'
            layout='fill'
            objectFit='contain'
            objectPosition='left'
            alt='logo'
          />
        </div>
        <div className='md:relative flex items-center md:border-2 rounded-full py-2 md:shadow-sm bg-white my-3 overflow-hidden'>
          <input
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            className='flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400'
            type='text'
            placeholder={placeholder || 'search'}
          />
          <SearchIcon className='hidden lg:inline-flex h-8 bg-[#F34636] text-white rounded-full p-2 cursor-pointer md:mx-2' />
        </div>
        <div className='flex space-x-4 items-center justify-end text-gray-500 mr-0 lg:mr-10'>
          <p className='hidden md:inline cursor-pointer'>Become a host</p>
          <GlobeAltIcon className='h-6 cursor-pointer' />
          <div className='flex items-center space-x-2 borde`r-2 p-2 rounded-full'>
            <MenuIcon className='h-6' />
            <UserCircleIcon className='h-6' />
          </div>
        </div>
      </header>
      {searchInput && (
        <div className='px-0 sm:px-[10vw] md:px-[15vw] lg:px-[20vw] xl:px-[33vw] 2xl-[38vw] pb-5 pt-24'>
          <div className='relative'>
            <DateRangePicker
              ranges={[selectionRange]}
              minDate={new Date()}
              rangeColors={['#FD5B61']}
              onChange={handleSelect}
            />
            <div className='flex items-center border-b mb-4'>
              <h2 className='text-2xl flex-grow font-semibold'>
                Number of Guests
              </h2>
              <UsersIcon className='h-5' />
              <input
                value={noOfGuests}
                onChange={(e) => setNoOfGuests(e.target.value)}
                type='number'
                min={1}
                className='w-12 pl-2 text-lg outline-none text-red-400'
              />
            </div>
            <div className='flex'>
              <button onClick={resetInput} className='flex-grow text-gray-500'>
                Cancel
              </button>
              <button onClick={search} className='flex-grow text-red-400'>
                Search
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
