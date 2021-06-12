import { Button, AppBar, Toolbar, Typography } from '@material-ui/core';

function Header(props) {
    return(
        <AppBar position="fixed">
            <Toolbar>
                <div style={{display:"flex", width:"1000px"}}>
                    <Typography variant="h2">{props.song}</Typography>
                </div>
                <div style={{display:"flex"}}>
                    <Button color="secondary" onClick={() => {props.play(true)}}>Start</Button>
                    <Button color="secondary" onClick={() => {props.play(false)}}>Stop</Button>
                    <Button color="secondary" onClick={() => {props.switchSong(-1)}}>Back</Button>
                    <Button color="secondary" onClick={() => {props.switchSong(1)}}>Forward</Button>
                    <Button color="secondary" onClick={() => {props.changeSpeed(props.speedAdjustment + 500)}}>Slow Down</Button>
                    <Typography variant="h6">{-1*props.speedAdjustment}</Typography>
                    <Button color="secondary" onClick={() => {props.changeSpeed(props.speedAdjustment - 500)}}>Speed Up</Button>
                    <Button color="secondary" onClick={() => {props.changeSpeed(0)}}>Reset</Button>
                </div>
            </Toolbar>
        </AppBar>
    )
}

export default Header;