import { Grid, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import Link from 'next/link';

const ArticlesPage = ({ posts }) => {
    const theme = useTheme();
    const { text, background, orange } = theme.palette;

    return <Grid>
        <Grid sx={{ background: background.primary, height: '100%' }} container display="flex" justifyContent="center" padding={2}>
            {posts.map(post =>
                <Grid item key={post.id} xs={12}
                    sx={{
                        display: "flex",
                        justifyContent: "center"
                    }}
                >
                    <Grid container maxWidth="650px" sx={{
                        color: text,
                        border: 1,
                        borderColor: 'transparent',
                        borderRadius: '5px',
                        background: post.imageAvg,
                        marginY: '10px',
                        padding: '15px'
                    }}>
                        <Grid item xs={4} display="flex" justifyContent="start">
                            <Link href={post.slug}>
                                <Image src={post?.image} width={180} height={140}></Image>
                            </Link>
                        </Grid>
                        <Grid container xs={8} paddingLeft='5px' display="flex" justifyContent="start">
                            <Link href={post.slug}>
                                <Typography sx={{
                                    textAlign: 'left',
                                    fontWeight: 'bold',
                                    color: orange,
                                    '&:hover': {
                                        textDecoration: 'underline',
                                        textDecorationColor: orange
                                    }
                                }}>{post.title}</Typography>
                            </Link>
                            <Typography textAlign='justify'>
                                {post.intro}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>)}
        </Grid>
    </Grid>
}

export async function getStaticProps() {
    const posts = require('../src/blog-posts').blogPosts
    posts.reverse();
    return {
        props: { posts: posts },
    };
}

export default ArticlesPage;