import './SelectionIcons.css'
import spotifyIcon from '../../../icons/spotify.png'
import youtubeIcon from '../../../icons/youtube.png'
import netflixIcon from '../../../icons/netflix.png'
import aliexpressIcon from '../../../icons/aliexpress.png'

interface Props {
    setSelectedIcon: (icon: string) => void,
}

export const SelectionIcons = ({setSelectedIcon}: Props) => {

    const clickHandler = (icon:string):void => {
        setSelectedIcon(icon);
    }

    return (
        <div className='selection-icons__wrapper'>
            <ul className='selection-icons'>
            {[spotifyIcon,spotifyIcon,spotifyIcon,youtubeIcon,aliexpressIcon,youtubeIcon,youtubeIcon,netflixIcon,netflixIcon,netflixIcon,netflixIcon,aliexpressIcon].map((el, i) => 
                <li className='selection-icons__icon' key={i} onClick={() => clickHandler(el)}>
                    <img src={el} alt="spotify icon" />
                </li>
            )}
            </ul>
        </div>
    )
}
