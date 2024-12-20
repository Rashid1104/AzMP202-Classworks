import React from 'react'
import Input from '../input'
import styles from "./index.module.scss"

const Main = () => {
  return (
    <section>
        <div className="section">
            <div className={styles.sides}>
                <div className="right-side">
                    <img src="https://s3-alpha-sig.figma.com/img/f521/1365/cbf08e0aae736e0af1c602611907327c?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fVTWP6w-ep6BUBBBMbfW8xF29PAqxxZQGpt5egm39d-8-HMAfR7usf5UFCeSLfmqNHjdtbIQE0aKWbaXWlH3veA5EwnqjUejlvbt1hiFYFHNbK-XTCNE0Jt6LqoJOLqPI~mACLDDCz0g1rm6lCgj~uHKCZJnXTJH7NdV0rdUPNVfm18J1-LKP0HKn2Oicm8CDqyJqXonGbw7kqiqmyTlQQvxmgUp-Nk66Bj~Lp3fHx8dSIeu-9fN2HRAB0Dk2-xFC8zNQ8Bz9sfgwmjiI-FlO-V3G2GZ2dtyewg5rH8tjP8G7q1FHfKiydvSe3DUYRCZehk-hPBF14Xjuxcpu6WPUQ__" alt="aaa" />
                </div>
                <div className="left-side">
                    <h1>
Get your most important tasks done in no time
</h1>
<p>
Sign up for free and turbocharge your productivity today
with the world’s best product management platform
</p>
<Input type={"text"} />
<Input type={"text"} />
                </div>
            </div>
        </div>


    </section>
  )
}

export default Main