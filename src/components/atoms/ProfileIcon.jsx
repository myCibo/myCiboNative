import { Image } from 'react-native';

export default function ProfileIcon(iconSource) {
    const styles = {
        profilePic: {
            width: 35,
            height: 35,
            borderRadius: 50,
        }
    };

    return (
        <Image style={styles.profilePic} source={{ uri: "https://external-preview.redd.it/mafiEalSCbe64rvjzZe1VKlPNO59u7CWK7YGlTK7R9Y.png?width=640&crop=smart&auto=webp&s=2f581485e1044c111c78de228640f09b40ea031a" }}></Image>
    );
}


