---
slug: supabase
title: Supabase
authors: satalesmana
# tags: [Supabase]
---

## Introduction to Supabase
Supabase is a Backend-as-a-Service (BaaS) platform that provides essential backend functionality for applications without requiring developers to build everything from scratch.

Built on PostgreSQL, Supabase provides a database, authentication, file storage, APIs, and real-time capabilities within a single platform.

## Why Use Supabase?
Here are some of its key advantages:
- **PostgreSQL Database** — Stores and manages data using a powerful relational database.
- **Authentication** — Provides login, registration, OAuth, and user management features.
- **Auto-generated APIs** — Automatically generates APIs for accessing database records, eliminating the need to create individual CRUD endpoints manually.
- **Storage** — Stores files such as images, documents, and videos.
- **Real-time** — Receives data changes in real time without continuously polling the server.
- **Faster Development** — Allows developers to focus on building application features instead of setting up and maintaining basic backend infrastructure.

## Use Supabase with Expo React Native
Learn how to create a Supabase project, add some sample data to your database, and query the data from an Expo app.

### 1. Install the Supabase client library
The fastest way to get started is to use the @supabase/supabase-js client library which provides a convenient interface for working with Supabase from a React Native app.

```bash
npx expo install @supabase/supabase-js @react-native-async-storage/async-storage react-native-url-polyfill
```

### 2. Create a helper file
Create a helper file ``lib/supabase.ts`` that exports a Supabase client using your Project URL and key.

example .env file
```bash
EXPO_PUBLIC_SUPABASE_URL=xxxxxx
EXPO_PUBLIC_SUPABASE_PUBLISHABLE_KEY=yyyyyy
```


```js
// lib/supabase.ts

import { AppState, Platform } from 'react-native'
import 'react-native-url-polyfill/auto'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL!
const supabasePublishableKey = process.env.EXPO_PUBLIC_SUPABASE_PUBLISHABLE_KEY!

export const supabase = createClient(supabaseUrl, supabasePublishableKey, {
  auth: {
    ...(Platform.OS !== 'web' ? { storage: AsyncStorage } : {}),
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})

// Tells Supabase Auth to continuously refresh the session automatically
// if the app is in the foreground. When this is added, you will continue
// to receive `onAuthStateChange` events with the `TOKEN_REFRESHED` or
// `SIGNED_OUT` event if the user's session is terminated. This should
// only be registered once.
if (Platform.OS !== 'web') {
  AppState.addEventListener('change', (state) => {
    if (state === 'active') {
      supabase.auth.startAutoRefresh()
    } else {
      supabase.auth.stopAutoRefresh()
    }
  })
}
```

### 3. Basic example suppabase auth
Create a React Native component to manage sign-ins and sign-ups. The app later uses the getClaims method in App.tsx to validate the local JWT before showing the signed-in user.

```js
// components/Auth.tsx

import React, { useState } from 'react'
import { Alert, StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native'
import { supabase } from '../lib/supabase'

export default function Auth() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  async function signInWithEmail() {
    setLoading(true)
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    })

    if (error) Alert.alert(error.message)
    setLoading(false)
  }

  async function signUpWithEmail() {
    setLoading(true)
    const {
      data: { session },
      error,
    } = await supabase.auth.signUp({
      email: email,
      password: password,
    })

    if (error) Alert.alert(error.message)
    if (!session) Alert.alert('Please check your inbox for email verification!')
    setLoading(false)
  }

  return (
    <View style={styles.container}>
      <View style={[styles.verticallySpaced, styles.mt20]}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          onChangeText={(text) => setEmail(text)}
          value={email}
          placeholder="email@address.com"
          autoCapitalize="none"
          style={styles.input}
        />
      </View>
      <View style={styles.verticallySpaced}>
        <Text style={styles.label}>Password</Text>
        <TextInput
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry={true}
          placeholder="Password"
          autoCapitalize="none"
          style={styles.input}
        />
      </View>
      <View style={[styles.verticallySpaced, styles.mt20]}>
        <TouchableOpacity
          style={[styles.button, loading && styles.buttonDisabled]}
          onPress={() => signInWithEmail()}
          disabled={loading}
        >
          <Text style={styles.buttonText}>Sign in</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.verticallySpaced}>
        <TouchableOpacity
          style={[styles.button, loading && styles.buttonDisabled]}
          onPress={() => signUpWithEmail()}
          disabled={loading}
        >
          <Text style={styles.buttonText}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    padding: 12,
  },
  verticallySpaced: {
    paddingTop: 4,
    paddingBottom: 4,
    alignSelf: 'stretch',
  },
  mt20: {
    marginTop: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#86939e',
    marginBottom: 6,
  },
  input: {
    borderWidth: 1,
    borderColor: '#86939e',
    borderRadius: 4,
    padding: 12,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#2089dc',
    borderRadius: 4,
    padding: 12,
    alignItems: 'center',
  },
  buttonDisabled: {
    opacity: 0.5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
})
```

```js
// App.tsx

import 'react-native-url-polyfill/auto'
import { useState, useEffect } from 'react'
import { supabase } from './lib/supabase'
import Auth from './components/Auth'
import { View, Text } from 'react-native'
import { JwtPayload } from '@supabase/supabase-js'

export default function App() {
  const [claims, setClaims] = useState<JwtPayload | null>(null)

  useEffect(() => {
    supabase.auth.getClaims().then(({ data: { claims } }) => {
      setClaims(claims)
    })

    supabase.auth.onAuthStateChange(() => {
      supabase.auth.getClaims().then(({ data: { claims } }) => {
        setClaims(claims)
      })
    })
  }, [])

  return (
    <View>
      <Auth />
      {claims && <Text>{claims.sub}</Text>}
    </View>
  )
}
```

## Set up a Supabase project
Create a new project in the Supabase Dashboard.
After your project is ready, create a table in your Supabase database. You can do this with either the Table Editor or the SQL Editor.

```bash
# Create a "dompet" table to store

create table dompet (
  id serial primary key,
  userId text not null,
  name text not null,
  balance integer not null default 0,
  cardBackground text not null,
  cardColor text not null,
  updated_at timestamptz default now()
  created_at timestamptz default now()
);
```

## Enable Data API access to Anon Role (optional) and Configure RLS

Expose the leaderboard table through the Data API so it can be queried over HTTP. A dompet is meant to be public, so anonymous clients only need read access.

```bash
## this part is optional
grant select on public.dompet to anon;

## Turn on RLS
alter table "dompet"
enable row level security;

## Anyone can read the dompet
create policy "dompet is public"
  on dompet
  for select
  to anon, authenticated
  using (true);

## Authenticated users can submit and update scores
create policy "Authenticated users can submit scores"
  on dompet
  for insert
  to authenticated
  with check (true);

create policy "Authenticated users can update scores"
  on dompet
  for update
  to authenticated
  using (true)
  with check (true);

```

## Client libraries

### 1. get data 
```js
    const { data, error } = await supabase
    .from('dompet')
    .select()
    .order('balance', { ascending: false })
```

### 2. insert data 
```js
    const { data, error } = await supabase
      .from('dompet')
      .insert([{ userId: 'xxxxxx', name:'Dompet Utama' balance: 18000 }])
      .select()
```

### 3. update data 
```js
    const { data, error } = await supabase
      .from('products')
      .update({ balance: 20000 })
      .eq('id', 1)
```

### 4. delete data 
```js
    const { data, error } = await supabase
      .from('dompet')
      .delete()
      .eq('id', 1)
```