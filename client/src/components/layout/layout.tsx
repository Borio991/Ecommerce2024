import Navbar from '@/components/component/Navbar';

interface Props {
  children: React.ReactNode;
}

function layout({ children }: Props) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
}

export default layout;
