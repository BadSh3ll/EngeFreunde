import { Client, Account, ID } from 'react-native-appwrite';

export const client = new Client()
    .setEndpoint('https://curiously-arriving-eagle.ngrok-free.app/v1')
    .setProject('enge-freunde')
    .setPlatform('com.engefreunde.app');

export const account = new Account(client);
