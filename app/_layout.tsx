import { Tabs } from 'expo-router/tabs';
export default function AppLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="train"
        options={{
          href: '/',
          title: 'TRAIN'
        }}
      />
      <Tabs.Screen
        name="build"
        options={{
          href: '/build',
          title: 'BUILD'
        }}
      />
      <Tabs.Screen
        name="learn"
        options={{
          href: '/learn',
          title: 'LEARN'
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          href: '/account',
          title: 'ACCOUNT'
        }}
      />
    </Tabs>
  );
}
