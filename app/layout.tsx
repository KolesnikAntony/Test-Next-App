import type {Metadata} from 'next';
import {Cabin} from 'next/font/google';
import './globals.css';
import Header from '@/components/header';
import Main from '@/components/main';
import {getServerSession} from 'next-auth';
import authConfig from '@/configs/auth';
import Provider from '@/provider/client-provider';

const inter = Cabin({subsets: ['latin']});

export const metadata: Metadata = {
  title: 'Alpheya',
};

const RootLayout = async ({children}: {children: React.ReactNode}) => {
  const session = await getServerSession(authConfig);
  return (
    <html lang='en'>
      <Provider session={session}>
        <body className={inter.className}>
          <Header />
          <Main>{children}</Main>
        </body>
      </Provider>
    </html>
  );
};
export default RootLayout;
