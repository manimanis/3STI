import os
from pprint import pprint
from PIL import Image

currdir = os.path.dirname(__file__)
filepath = os.path.join(currdir, 'pixel-art-mario.jpg')#'pixel-art-naruto-facile-4.jpg')

# Open an image file
with Image.open(filepath) as img:
    # Convert the image to RGB if it's not
    img = img.convert('RGB')
    
    # Get the size of the image
    width, height = img.size

    xstep, ystep = 45, 45
    
    # Create a list to hold the pixel colors
    pixel_colors = []

    distinct_colors = []
    # Loop over each pixel
    for y in range(0, height, ystep):
        line_colors = []
        for x in range(0, width, xstep):
            # Get the color of the pixel
            pixel_color = img.getpixel((x + xstep // 2, y + ystep // 2))
            rgb_color = f"#{hex(pixel_color[0])[2:]:02}{hex(pixel_color[1])[2:]:02}{hex(pixel_color[2])[2:]:02}"
            # Append the color to the list
            line_colors.append(rgb_color)
            if rgb_color not in distinct_colors:
                print(pixel_color, rgb_color)
                distinct_colors.append(rgb_color)
        pixel_colors.append(line_colors)

distinct_colors.sort()

pprint(distinct_colors, compact=True)
pixel_colors = [[distinct_colors.index(color) for color in line] for line in pixel_colors]
pprint(pixel_colors, width=60, depth=2, compact=True)