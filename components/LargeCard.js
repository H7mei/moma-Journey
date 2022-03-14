import Image from 'next/image';

function LargeCard({ img, title, description, buttonText }) {
  return (
    <section className='relative py-16 cursor-pointer'>
      <div className='relative h-[60vh] min-w-[300px]'>
        <Image
          src={img}
          layout='fill'
          objectFit='cover'
          alt=''
          className='rounded-none md:rounded-2xl'
        />
      </div>
      <div className='absolute top-32 left-12 lg:left-24'>
        <h3 className='lg:text-6xl mb-3 text-4xl w-64 lg:w-[400px]'>{title}</h3>
        <p className='lg:text-xl'>{description}</p>
        <button className='text-sm lg:text-lg text-white bg-gray-800 px-4 py-2 rounded-lg mt-5'>
          {buttonText}
        </button>
      </div>
    </section>
  );
}

export default LargeCard;
