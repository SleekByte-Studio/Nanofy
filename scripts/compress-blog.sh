#!/bin/bash

# Define source and destination paths
source_folder="../blogs"
destination="../"

# Check if the source folder exists
if [ ! -d "$source_folder" ]; then
    echo "Source folder '$source_folder' not found."
    exit 1
fi

# Compress the folder into a zip file
zip -r "$destination/blogs.zip" "$source_folder"

# Check if zip was successful
if [ $? -eq 0 ]; then
    echo "Folder '$source_folder' compressed successfully to '$destination/blogs.zip'."
else
    echo "Error: Failed to compress folder '$source_folder'."
    exit 1
fi

exit 0
