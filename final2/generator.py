import pyperclip
import json
with open("video-card.html", "r") as file:
    template = file.read()
with open("videos.txt", "r") as file:
    videos = file.readlines()
big_string = ""
for video in videos:
    video = video.split("|")
    big_string += template.replace(
        "{{title}}", video[0]).replace("{{id}}", video[1].replace("\n", ""))
pyperclip.copy(big_string)
print(json.dumps([video.split("|")[0] for video in videos]))
