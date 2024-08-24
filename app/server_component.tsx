"use server"

import fs from 'fs/promises';

export default async function server(){// Function to check if the file exists
let confirmfile = async () => {
    try {
      await fs.access('./app/component/1.tsx');
      return true;
    } catch {
      return false;
    }
  };
  
  // Fetching data and writing files if the file does not exist
  (async () => {
    try {
      const response = await fetch('https://codehelp-apis.vercel.app/api/get-top-courses');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
  
      if (!await confirmfile()) {
        for (const category in data.data) {
          let counter = 0;
          console.log(`Category: ${category}`);
  
          // Iterate over each course in the current category
          for (const course of data.data[category]) {
            counter++;
            // console.log(`Course ${counter}:`);
            // console.log(`ID: ${course.id}`);
            // console.log(`Title: ${course.title}`);
            // console.log(`Description: ${course.description}`);
            // console.log(`Image URL: ${course.image.url}`);
  
            // Define the file path and card code for each course
            const filePath = `./app/components/${category}/${category}_${counter}.tsx`;
  
            const card_code = `
              export default function ${category}_${counter}() {
                return (
                  <>
                    <div className="w-[300px] bg-box-bg bg-opacity-80 rounded-md overflow-hidden">
                      <div className="relative">
                        <img src="${course.image.url}" alt="${course.title}" />
                        <div className="w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-13px] grid place-items-center">
                          <button>
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1" viewBox="0 0 48 48" enable-background="new 0 0 48 48" font-size="1.75rem" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="#FFCDD2" d="M34,9c-4.2,0-7.9,2.1-10,5.4C21.9,11.1,18.2,9,14,9C7.4,9,2,14.4,2,21c0,11.9,22,24,22,24s22-12,22-24 C46,14.4,40.6,9,34,9z"></path></svg>
                          </button>
                        </div>
                      </div>
                      <div className="p-4">
                        <p className="text-white font-semibolt text-lg leading-6">${course.title}</p>
                        <p className="mt-2 text-white">${course.description}</p>
                      </div>
                    </div>
                  </>
                );
              }
            `;
  
            // Write the file for the current course
            await fs.writeFile(filePath, card_code);
            // console.log(`File written successfully: ${filePath}`);
          }
          
          // console.log('-----------------------'); // Separator for categories
        }
      }
    } catch (error) {
      console.error('Fetch error:', error);
    }
  })();
}  