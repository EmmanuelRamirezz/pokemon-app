import { Waveform } from '@uiball/loaders'
export const Loader = () => {
  return(
    <div className='flex justify-center mt-52'>
    <Waveform 
     size={40}
     lineWeight={3.5}
     speed={1} 
     color="black" 
    />
    </div>
  )
}