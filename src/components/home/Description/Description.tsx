import styles from './Description.module.sass'
import Image from 'next/image'
export const Description = () => {
    return (
        <section className={styles.Description}>
            <Image src="/images/product.jpg" alt="product market place" width={500} height={300} priority={false}/>
            <div className={styles.Description__text}>
                <h2>Bring the future today</h2>
                <p>Future World: Your Gateway to Tomorrow's Tech! Dive into a world of cutting-edge gadgets and gear. Stay ahead of the curve and redefine your digital lifestyle with us.</p>
            </div>
        </section>
    )
}