import { Grid } from "@mui/material";
import Navbar from "../src/components/navbar";

const ArticlesPage = ({ posts }) => {

    return <Grid>
        <Navbar />
        <Grid container display="flex" justifyContent="center" margin={3} padding={2}>
            {posts.map(post =>
                <Grid item xs={12} sm={6} md={4} lg={3} margin={3} sx={{
                    border: 1
                }}>
                    <Grid item display="flex" justifyContent="center">
                        <img src="./2048.png" width={310} height={280}></img>
                    </Grid>
                    {post.title}
                </Grid>)}
        </Grid>
    </Grid>
}

export async function getStaticProps({ params }) {
    const res = await fetch("http://localhost:3000/api/posts");
    const json = await res.json();
    json.reverse();
    return { props: { posts: json, fallback: false } };
}

export default ArticlesPage;