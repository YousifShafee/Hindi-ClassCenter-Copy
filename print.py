from bs4 import BeautifulSoup
import requests, os
from multiprocessing import Pool

source = '/home/yousif/Downloads/Ts/ts/web/nohtml'
to = '/home/yousif/Downloads/Ts/ts/web/nnhtml'

url = "https://translation.googleapis.com/language/translate/v2"
params = {'key': 'google_key'}
body = {"target": "hi"}
except_elem = {'head', 'body', 'html', 'script', 'style', 'meta', 'link', 'ul'}
text_elem = {'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'strong', 'a', 'b', 'i', 'small', 'sub', 'sup', 'ins', 'mark', 'em', 'del', 'p', 'span', 'hr', 'pre'}
atrs = {'title', 'alt', 'placeholder'}

def translate(text):
    body['q'] = [text]
    response = requests.post(url, json=body, params=params)
    return response.json()['data']['translations'][0]['translatedText']
    
def translate_file(file_name, to_name):
    print('start with'+file_name)
    file = open(file_name, 'r')
    soup = BeautifulSoup(file, features="html.parser")
    file.close()
    for tag in soup.find_all(True):
        if tag.name not in except_elem:
            for atr in atrs:
                try:
                    tag[atr] = translate(tag[atr])
                except:
                    pass
            if tag.string:
                tag.string.replace_with(translate(tag.string))
            elif tag.contents:
                for elem in tag.contents:
                    if elem.string and elem.name not in text_elem and elem.name not in except_elem:
                        elem.string.replace_with(translate(elem.string))
    file = open(file_name, 'w')
    file.write(str(soup))
    file.close()
    print("Finished")

def check_and_translate(filename):
    source_directory = os.path.join(source, filename)
    to_directory = os.path.join(to, filename)
    if os.path.isfile(source_directory):
        translate_file(source_directory, to_directory)

with Pool(10) as p:
    print(p.map(check_and_translate, os.listdir(source)))
