import { Grid, useTheme } from "@mui/material";
import Navbar from "../src/components/navbar";
import Image from "next/image";

const ArticlesPage = ({ posts }) => {
    const theme = useTheme();
    const {text, background} = theme.palette;

    return <Grid>
        <Grid sx={{ background: background.primary, height: '100%' }} container display="flex" justifyContent="center" padding={2}>
            {posts.map(post =>
                <Grid item xs={12} sm={6} md={4} lg={3} padding={3} sx={{
                    color: text,
                    border: 1
                }}>
                    <Grid item display="flex" justifyContent="center">
                        <Image src={post?.image} width={310} height={280}></Image>
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