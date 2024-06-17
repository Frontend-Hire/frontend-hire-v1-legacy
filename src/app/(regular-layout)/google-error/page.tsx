import CustomHeading from '@/components/CustomHeading';
import Image from 'next/image';
import googleError from '@/assets/googleError.png';
import Link from 'next/link';

export default function IosGoogleErrorPage() {
  return (
    <article className="flex flex-col gap-5">
      <CustomHeading
        title="Looks, like you are trying to sign in from inside of another app"
        subTitle="Oops, this is a weird error that we are not able to solve yet!"
      />
      <div className="space-y-2 text-lg">
        <p>
          Kindly open our website from the OS device browser like Chrome,
          Safari, or any other browser!
        </p>
        <p>This is an error from Google for which we have zero control!</p>
        <p>
          Read more about this error from Google docs itself:{' '}
          <Link
            prefetch={false}
            className="text-link underline underline-offset-2"
            href="https://developers.googleblog.com/en/upcoming-security-changes-to-googles-oauth-20-authorization-endpoint-in-embedded-webviews/"
          >{`Upcoming security changes to Google's OAuth 2.0 authorization endpoint in embedded webviews`}</Link>
        </p>
      </div>
      <Image placeholder="blur" priority src={googleError} alt="" />
    </article>
  );
}
