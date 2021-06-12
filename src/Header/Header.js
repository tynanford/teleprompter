import { AppBar, Toolbar, Typography, IconButton, Tooltip} from '@material-ui/core';
import { PlayCircleFilledWhite, Stop, SkipNext, SkipPrevious, FastForward, FastRewind, Clear } from '@material-ui/icons';

function Header(props) {
    const largePadding = {
        paddingRight: 30,
        paddingLeft: 30,
    }
    const speedPadding = {
        width: 120,
    }

    return(
        <AppBar position="fixed">
            <Toolbar>
                <div style={{display:"flex", width:"1000px"}}>
                    <Typography variant="h2">{props.song}</Typography>
                </div>
                <div style={{display:"flex"}}>
                    <Tooltip title={<h1>Start</h1>} arrow>
                        <IconButton style={largePadding} color="inherit" onClick={() => {props.play(true)}}>
                            <PlayCircleFilledWhite fontSize="large" />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title={<h1>Stop</h1>} arrow>
                        <IconButton style={largePadding} color="inherit" onClick={() => {props.play(false)}}>
                            <Stop fontSize="large" />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title={<h1>Back</h1>} arrow>
                        <IconButton style={largePadding} color="inherit" onClick={() => {props.switchSong(-1)}}>
                            <SkipPrevious fontSize="large" />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title={<h1>Forward</h1>} arrow>
                        <IconButton style={largePadding} color="inherit" onClick={() => {props.switchSong(1)}}>
                            <SkipNext fontSize="large" />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title={<h1>Slow 500ms</h1>} arrow>
                        <IconButton style={largePadding} color="inherit" onClick={() => {props.changeSpeed(props.speedAdjustment + 500)}}>
                            <FastRewind fontSize="large" />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title={<h1>Speed Adjustment</h1>} arrow>
                        <Typography style={speedPadding} color="secondary" variant="h3" align="center">
                            {-1*props.speedAdjustment}
                        </Typography>
                    </Tooltip>
                    <Tooltip title={<h1>Speed 500ms</h1>} arrow>
                        <IconButton style={largePadding} color="inherit" onClick={() => {props.changeSpeed(props.speedAdjustment - 500)}}>
                            <FastForward fontSize="large" />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title={<h1>Reset Adjustment</h1>} arrow>
                        <IconButton style={largePadding} color="inherit" onClick={() => {props.changeSpeed(0)}}>
                            <Clear fontSize="large"/>
                        </IconButton>
                    </Tooltip>
                </div>
            </Toolbar>
        </AppBar>
    )
}

export default Header;