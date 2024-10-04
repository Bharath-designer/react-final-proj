import { more_from_blogs } from "../../content/HomePageContent"
import styles from "../../styles/Home/BlogsContainer.module.scss"


const BlogsContainer = () => {
    return (
        <div className={styles.blogs_container}>
            <div className={styles.title}>More from our blog</div>
            <div className={styles.content}>
                {
                    more_from_blogs.map((blog,index)=>{
                        return (
                            <div key={index} className={styles.blog_card}>
                                <div className={styles.img_container}>
                                    <img src={blog.img} alt="" />
                                </div>
                                <div className={styles.blog_title}>{blog.title}</div>
                                <div className={styles.blog_desc}>{blog.desc}</div>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default BlogsContainer
