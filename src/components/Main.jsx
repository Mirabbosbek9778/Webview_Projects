import { useEffect, useRef, useState } from 'react';
export default function Main() {
  const [data, setData] = useState({ language: '', date: '' });
  const [isMobile, setIsMobile] = useState('');
  const [geros, setGeros] = useState('');
  const [langtitu, setLangtitu] = useState({
    lat: 41.31844990760012,
    lng: 69.29607491071154,
  });
  const mapCenter = { lat: 37.7749, lng: -122.4194 };
  // const markerPosition = { lat: langtitu?.latitude, lng: langtitu?.longitude };
  const mapZoom = 13;
  // kutb olyabdi

  // useEffect(() => {
  //   window?.webkit?.messageHandlers?.buttonPressed.postMessage('getLang');
  // }, []);
  useEffect(() => {
    window.addEventListener('message', handleReceivedData);
    return () => {
      window.removeEventListener('message', handleReceivedData);
    };
  }, []);
  useEffect(() => {
    // Function to send orientation data back to Swift
    console.log(window.matchMedia('(orientation: landscape)').matches);
    console.log(window.orientation, 'orientation');
    const sendOrientationData = (data) => {
      console.log(data, 'orientation');
      var orientation = '';
      if (window.matchMedia('(orientation: landscape)').matches) {
        if (window.orientation === 90) {
          orientation = 'landscapeLeft';
          setGeros(orientation);
        } else {
          orientation = 'landscapeRight';
          setGeros(orientation);
        }
      } else {
        orientation = 'portrait';
        setGeros(orientation);
      }
      console.log(orientation, 'orientation');

      // window?.webkit?.messageHandlers.orientation.postMessage(orientation);
    };

    // Listen for orientation change events and call the function
    window.addEventListener('orientationchange', sendOrientationData);
    // sendOrientationData(); // Send initial orientation data on page load

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('orientationchange', sendOrientationData);
    };
  }, []);
  // useEffect(() => {
  //   handleReceivedData();
  // }, [langtitu]);

  const handleReceivedData = (event) => {
    const receivedData = event.data;
    // Handle the received data
    console.log('Hello:', receivedData);
    console.log('Hello2:', event);
    // console.log('Hello2:', receivedData?.languageCode.slice(0, 2));

    // if (receivedData) setData(receivedData);
    if (receivedData?.orientation) {
      setIsMobile(receivedData?.orientation);
      // console.log('receivedData', receivedData);
    }
    if (receivedData?.latitude) {
      setLangtitu({
        lat: receivedData?.latitude,
        lng: receivedData?.longitude,
      });
      // console.log('receivedData', receivedData);
    }
    if (receivedData?.languageCode) {
      setData({
        ...data,
        language: receivedData?.languageCode,
      });
      // console.log('receivedData', receivedData);
    }
    if (receivedData?.currentDateString) {
      setData({
        ...data,
        date: receivedData?.currentDateString,
      });
      // console.log('receivedData', receivedData);
    }
  };

  const handleClick = () => {
    window?.webkit?.messageHandlers?.buttonPressed.postMessage('getTime');
  };
  const handleClick2 = () => {
    window?.webkit?.messageHandlers?.buttonPressed.postMessage('close');
  };
  const handleClick3 = () => {
    window?.webkit?.messageHandlers?.buttonPressed.postMessage(
      'locationButtonClicked'
    );
  };

  const sendDataToAndroid = () => {
    window?.JSBridge?.showMessageInNative('getTime');
  };
  const sendDataToAndroidClose = () => {
    window?.JSBridge?.showMessageInNative('close');
  };
  const deepLink = () => {
    window?.webkit?.messageHandlers?.buttonPressed.postMessage(
      'deepLinkButton'
    );
  };
  const getLang = () => {
    window?.webkit?.messageHandlers?.buttonPressed.postMessage('getLang');
  };
  return (
    <div className='w-screen'>
      {/* <CarouselCustom /> */}
      {/* <div className='h-56 sm:h-64 xl:h-80 2xl:h-96 p-5 '></div> */}
      <div className='flex min-h-full  flex-1 flex-col justify-center px-6 py-12 lg:px-8'>
        {/* <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
          <h2 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>
            Sign in to your account
          </h2>
        </div> */}
        <h1 className='mt-10 text-center text-xl font-bold leading-9 tracking-tight text-gray-900'>
          {`Mobile device date: ${data?.date}`}
        </h1>
        <h1 className='mt-10 text-center text-xl font-bold leading-9 tracking-tight text-gray-900'>
          {`Mobile device Geroscope: ${geros}`}
        </h1>
        <h1 className='mt-10 text-center text-xl font-bold leading-9 tracking-tight text-gray-900'>
          {`Maps: ${langtitu?.lat} : ${langtitu?.lng}`}
        </h1>
        <h1 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 flex'>
          Mobile system language :
          {data?.language && (
            // <img
            //   src={`https://flagcdn.com/${
            //     data?.language.slice(0, 2) == 'en'
            //       ? 'gb'
            //       : data?.language.slice(0, 2)
            //   }.svg`}
            //   width='50'
            // />
            <img src={`https://flagcdn.com/gb.svg`} width='50' />
          )}
        </h1>

        <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
          {/* <form className='space-y-6' action='#' method='POST'> */}
          {/* <div>
              <label
                htmlFor='email'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                Email address
              </label>
              <div className='mt-2'>
                <input
                  id='email'
                  name='email'
                  type='email'
                  autoComplete='email'
                  required
                  className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div>
              <div className='flex items-center justify-between'>
                <label
                  htmlFor='password'
                  className='block text-sm font-medium leading-6 text-gray-900'
                >
                  Password
                </label>
                <div className='text-sm'>
                  <a
                    href='#'
                    className='font-semibold text-indigo-600 hover:text-indigo-500'
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className='mt-2'>
                <input
                  id='password'
                  name='password'
                  type='password'
                  autoComplete='current-password'
                  required
                  className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div> */}

          <div>
            {/* <MapComponent
              center={mapCenter}
              zoom={mapZoom}
              markerPosition={langtitu}
            /> */}
          </div>
          <div>
            <button
              onClick={() => {
                handleClick();
                sendDataToAndroid();
              }}
              id='webButton'
              className=' mt-2 flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
            >
              Get Time
            </button>
          </div>
          <div>
            <button
              onClick={() => {
                handleClick3();
              }}
              // id='webButton'
              className=' mt-2 flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
            >
              Get Location
            </button>
          </div>
          <div>
            <button
              onClick={() => {
                handleClick2(), sendDataToAndroidClose();
              }}
              id='webButton2'
              className=' mt-2 flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
            >
              Close
            </button>
          </div>
          <div>
            <button
              onClick={() => {
                deepLink();
              }}
              // id='webButton2'
              className=' mt-2 flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
            >
              Deep Link
            </button>
          </div>
          <div>
            <button
              onClick={() => {
                getLang();
              }}
              // id='webButton2'
              className=' mt-2 flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
            >
              get Language
            </button>
          </div>
          {/* </form> */}

          <p className='mt-10 text-center text-sm text-gray-500'>
            Not a member?{' '}
            <a
              href='#'
              className='font-semibold leading-6 text-indigo-600 hover:text-indigo-500'
            >
              Start a 14 day free trial
            </a>
          </p>
        </div>
        {/* <video ref={videoRef} autoPlay></video> */}
      </div>
    </div>
  );
}
