import { Metadata } from 'next';
import HomebasePage from '@/views/homebase/ui/HomebasePage';

export const metadata: Metadata = {
  title: '홈베이스',
  description: '홈베이스 페이지입니다.',
};

export default function Page() {
  return <HomebasePage />;
}
