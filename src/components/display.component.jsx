// Simple Display of elements with the colors

const Display = () => {
    return (
        <div className='content'>
            <section>
                <div className='surface-samples'>
                    <div className='surface1'></div>
                    <div className='surface2'></div>
                    <div className='surface3'></div>
                    <div className='surface4'></div>
                </div>
            </section>

            <section>
                <div className='text-samples'>
                    <h1 className='text1'>
                        <span className='swatch brand'></span>
                        Brand Color
                    </h1>
                    <h1 className='text1'>
                        <span className='swatch text1'></span>
                        Text Color 1
                    </h1>
                    <h1 className='text2'>
                        <span className='swatch text2'></span>
                        Text Color 2
                    </h1>
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
            </section>
        </div>
    );
};

export default Display;
