import NetInfo from "@react-native-community/netinfo";


const getNetSpeed = async () => {
    let val = 0
    await NetInfo.refresh().then(state => {
        val = state.details.linkSpeed
    });
    return val
};


export default getNetSpeed;
  