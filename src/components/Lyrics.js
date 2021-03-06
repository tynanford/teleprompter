import { Typography, Container } from '@material-ui/core';

function Lyrics(props) {
    const textPadding = {
        paddingBottom: 15,
        paddingTop: 15
    }


    return(
        <Container maxWidth={false}>
            <Typography style={textPadding} variant="h1">
                {props.lyricIndex > 1 ? props.songs[props.song][props.lyricIndex-2].lyric : ''}
            </Typography>
            <Typography style={textPadding} variant="h1">
                {props.lyricIndex > 0 ? props.songs[props.song][props.lyricIndex-1].lyric : ''}
            </Typography>
            <Typography style={textPadding} variant="h1" style={{color: 'yellow', textDecoration: 'underline'}}>
                {props.songs[props.song][props.lyricIndex].lyric}
            </Typography>
            <Typography style={textPadding} variant="h1">
                {props.lyricIndex < props.songs[props.song].length - 1 ? props.songs[props.song][props.lyricIndex+1].lyric : ''}
            </Typography>
            <Typography style={textPadding} variant="h1">
                {props.lyricIndex < props.songs[props.song].length - 2 ? props.songs[props.song][props.lyricIndex+2].lyric : ''}
            </Typography>
        </Container>
    )
}

export default Lyrics;