export const initialState = {
    user: null,
    expires: 0,
    ads: false,
    recentlyPlayed: null,
    yourLibrary: null,
    item: null,
    albums: null,
    playingTrack: null,
    playingState: null,
    play: false,
    next: false,
    pause: false,
    newVToken: null,
    token:  null,
    // "BQDPHCQap3lzJjPnsDZiLU-tb9gAWjuQWaoFd5q1QNLOQfo5ibU2YbJdh56yoDDg1p72xU-m4VgFuSf_88EG2ADh99bTujspL9bsjKMqulnqr2xLrhPnYniyiCSBRroaTA4usBHHXeCM6dSyeG3yd0nNVKYJyqMNBb6AmsyLRhrJNt3g9HXy",
}

const reducer = (state, action) => {
    console.log(action)
    if(action.type === 'SET_USER')
        return {
            ...state,
            user: action.payload.user
        }

    if(action.type === 'SET_NEWVAL')
        return {
            ...state,
            newVal: action.payload.newVal
        }
    
    if(action.type === 'SET_TOKEN')
        return {
            ...state,
            token: action.payload.token,
            expires: action.payload.expires,
        }

    if(action.type === 'SET_CURRENT_PLAYBACK_STATE')
        return {
            ...state,
            playing: action.payload.playing,
            playingState: action.payload.playbackState,
        }
    if(action.type === 'SET_CURRENT_PLAYING_TRACK')
        return {
            ...state,
            ads: action.payload.ads,
            playingTrack: action.payload.playingTrack,
        }

    if(action.type === 'SET_ADS')
        return {
            ...state,
            ads: action.payload.ads,
            playingTrack: action.payload.playingTrack,
        }

    if(action.type === "SET_PLAY")
        return {
            ...state,
            play: !action.payload.play,
        }

    if(action.type === "SET_NEXT")
        return {
            ...state,
            next: action.payload.next,
        }

    if(action.type === "SET_PREV")
        return {
            ...state,
            prev: action.payload.prev,
        }

    if(action.type === "SET_RECENTLY_PLAYED_TRACKS")
        return {
            ...state,
            recentlyPlayed: action.payload.recentlyPlayed,
        }

    if(action.type === "SET_YOUR_LIBRARY")
        return {
            ...state,
            yourLibrary: action.payload.yourLibrary,
        }
    return state;
}

export default reducer;