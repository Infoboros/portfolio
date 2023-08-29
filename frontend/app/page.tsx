import styles from './page.module.css'
import Summary from "@/app/_components/Summary";
import Image from "next/image";
import ScrollNext from "@/app/_components/ScrollNext";

export default function Home() {
    return (
        <main className={styles.main}>
            <div className={styles.content}>
                <div className={styles.summaryWrapper}>
                    <Summary/>
                </div>
                <div className={styles.imageWrapper}>
                    <Image
                        fill
                        src={'../../Header.svg'}
                        alt={'Фото'}
                    />
                </div>
            </div>
            <ScrollNext
                className={styles.scrollNext}
            />
        </main>
    )
}
