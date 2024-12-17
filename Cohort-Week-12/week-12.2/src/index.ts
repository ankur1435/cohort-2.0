// Pre-requisities

interface User {
    name: String;
    age: number;
};

function sumOfAge(user1: User, user2: User) {
    return user1.age + user2.age;
}

const age = sumOfAge({ name: 'Taro', age: 20 }, { name: 'jiro', age: 30 });
console.log(age);

// Pick 

interface Client {
    id: string;
    name: string;
    age: number;
    email: string;
    password: string;
};

type UpdateProps = Pick<Client, 'name' | 'age' | 'email'>

function updateUser(UpdateProps: UpdateProps) {
    // hit the database to update the user 
}

// Partial

interface client {
    id: string;
    name: string;
    age: number;
    email: string;
    password: string;
};

type UpdateProp = Pick<Client, 'name' | 'age' | 'email'>;

type UpdatePropsOptional = Partial<UpdateProp>;

function updateClient(UpdateProps: UpdateProps) {
    // hit the database to update the user 
}

// Readonly

interface Config {
    endpoint: string;
    apiKey: string;
}

const config: Readonly<Config> = {
    endpoint: 'https://api.example.com',
    apiKey: 'abcdef123456',
};

// config.apiKey = ''newkey'; //Error: Cannot assign to 'apiKey' because it is a read-only property

// Record and Maps

interface Usertype {
    id: string;
    name: string;
}

type Users = Record<string, Usertype>;

const users: Users = {
    'abc123': { id: 'abc123', name: 'John Doe' },
    'xyz789': { id: 'xyz789', name: 'John Doe' }
};

console.log(users['abc123']); 

type user = {
    name: string;
    age: number;
    email: string;
}

const Users = new Map<string, user>()
Users.set('ras@qd1', { name: 'Ras', age: 30, email: 'ras@qd1' })
Users.set('sarah@qd1', { name: 'Sarah', age: 32, email: 'sarah@qd1' })

const emp = Users.get('ras@qd1');
console.log(emp);

// Exclude 

type EventType = 'click' | 'scroll' | 'mousemove';
type ExcludeEvent = Exclude<EventType, 'scroll'>;

const handleEvent = (event: ExcludeEvent) => {
    console.log(`Handling event: ${event}`);
};

handleEvent('click');

// Inference

import { z } from 'zod';
import express from 'express';

const app = express();

const userProfileSchema = z.object({
    name: z.string().min(1),
    email: z.string().email(),
    age: z.number().min(18).optional(),
})

export type FinalUserSchema = z.infer<typeof userProfileSchema>;

app.put('/user', (req, res) => {
    const { success } = userProfileSchema.safeParse(req.body);
    const updateBody: FinalUserSchema = req.body;

    if(!success) {
        res.status(411).json({});
        return
    }

    res.json({
        message: "User updated"
    })
});