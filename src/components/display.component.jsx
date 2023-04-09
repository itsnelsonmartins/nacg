import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

const Display = () => {
    return (
        <div className='wrapper'>
            <div className='tile is-ancestor'>
                <div className='tile is-parent'>
                    <article className='tile is-child box surface1'>
                        <div>1</div>
                    </article>
                </div>
                <div className='tile is-parent'>
                    <article className='tile is-child box surface2'>
                        <div>2</div>
                    </article>
                </div>
            </div>
            <div className='tile is-ancestor'>
                <div className='tile is-parent'>
                    <article className='tile is-child box surface3'>
                        <div>3</div>
                    </article>
                </div>
                <div className='tile is-parent'>
                    <article className='tile is-child box surface4'>
                        <div>4</div>
                    </article>
                </div>
            </div>
            <div className='content'>
                <div className='level'>
                    <div className='level-item has-text-centered'>
                        <div className='brand'>
                            <p className='heading'>Brand Color</p>
                            <FontAwesomeIcon icon={faCircle} className='icon' />
                        </div>
                    </div>
                    <div className='level-item has-text-centered'>
                        <div className='textColor1'>
                            <p className='heading '>Text Color 1</p>
                            <FontAwesomeIcon icon={faCircle} className='icon' />
                        </div>
                    </div>
                    <div className='level-item has-text-centered'>
                        <div className='textColor2'>
                            <p className='heading '>Text Color 2</p>
                            <FontAwesomeIcon icon={faCircle} className='icon' />
                        </div>
                    </div>
                </div>
                <p className='text1'>
                    I haven't felt much of anything since my guinea pig died.
                    Switzerland is small and neutral! We are more like Germany,
                    ambitious and misunderstood! I am the man with no name, Zapp
                    Brannigan! Oh, you're a dollar naughtier than most.
                </p>
                <hr />
                <p className='text2'>
                    <b>
                        It's just like the story of the grasshopper and the
                        octopus. All year long, the grasshopper kept burying
                        acorns for winter, while the octopus mooched off his
                        girlfriend and watched TV. But then the winter came, and
                        the grasshopper died, and the octopus ate all his
                        acorns. Also he got a race car. Is any of this getting
                        through to you? Noooooo!
                    </b>
                </p>
            </div>
        </div>
    );
};

export default Display;
