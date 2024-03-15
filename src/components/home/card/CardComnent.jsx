
'use client';

import { Card } from 'flowbite-react';

export default function CardComponent() {
  return (
    <div className='grid gap-4  m-3'>
    <Card
      className="max-w-sm "
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc="https://i.pinimg.com/564x/0c/4e/1a/0c4e1a2a2e1f8e68ebfcf958da458f46.jpg"
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Noteworthy technology acquisitions 2021
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
      </p>
    </Card>
    </div>
  );
}
