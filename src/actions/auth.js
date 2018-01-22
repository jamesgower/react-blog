import { firebase, googleAuthProvider, facebookAuthProvider, githubAuthProvider, twitterAuthProvider } from '../firebase/firebase';
import database from '../firebase/firebase';

export const login = uid => ({
	type: 'LOGIN',
	uid,
});

export const startLoginWithGoogle = () => {
	return () => {
		return firebase.auth().signInWithPopup(googleAuthProvider);
	};
};

export const startLoginWithFacebook = () => {
	return () => {
		return firebase.auth().signInWithPopup(facebookAuthProvider);
	};
};

export const startLoginWithGithub = () => {
	return () => {
		return firebase.auth().signInWithPopup(githubAuthProvider);
	};
};

export const startLoginWithTwitter = () => {
	return () => {
		return firebase.auth().signInWithPopup(twitterAuthProvider);
	};
};

export const logout = () => ({
	type: 'LOGOUT',
});

export const startLogout = () => {
	return () => {
		return firebase.auth().signOut();
	};
};
