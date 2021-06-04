import xlrd
import json

loc = ('./excel-json/SongLyrics.xls')

wb = xlrd.open_workbook(loc)

songs = []

songs_dict = {}
for sheet in wb.sheets():
    song_name = sheet.cell_value(0,0)
    songs.append(song_name)
    #song_lyrics = [] 
    song_lyrics = [] 
    count = 0
    for l in range(1,sheet.nrows):
        tmp = []
        lyric = sheet.cell_value(l, 0)
        time = sheet.cell_value(l, 1)
        #song_lyrics.append(lyric)
        tmp.append(lyric)
        tmp.append(time)
        song_lyrics.append(tmp)
        count += 1
    songs_dict[song_name] = song_lyrics
    

with open('./public/songs.json', 'w', encoding='utf-8') as f:
    json.dump(songs_dict, f, ensure_ascii=False, indent=4)

