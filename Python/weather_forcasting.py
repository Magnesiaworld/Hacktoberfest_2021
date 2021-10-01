#!/usr/bin/python

#Authors:- Leyuskc

### simplests linear python webscrapping project
### importing required modules ###
try:
    import requests
    from bs4 import BeautifulSoup as bs
    import re
    from pprint import pprint

except ModuleNotFoundError:
    print("Please Install modules ====>beautifulsoup4,requests")
    import os
    os.system('python pip install beautifulsoup requests re pprint')

####    DECLATRATION OF VARIABLES    ####
universal="https://www.accuweather.com"

####  RESULT FOUND ####
found=False
while not found:
    query=input("Enter the city name/zip code :- ")
    search_url="https://www.accuweather.com/en/search-locations?query="+query
    headers={
                        "authority":"www.accuweather.com",
                        "method":"GET",
                        "path":"/en/search-locations?query="+query,
                        "scheme":"https",
                        "accept":"text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
                        "accept-encoding":"gzip, deflate, br",
                        "accept-language":"en-US,en;q=0.9",
                        "cache-control":"max-age=0",
                        "referer":"https://www.accuweather.com/",
                        "sec-fetch-dest":"document",
                        "sec-fetch-mode":"navigate",
                        "sec-fetch-site":"same-origin",
                        "sec-fetch-user":"?1",
                        "upgrade-insecure-requests":"0",
                        "user-agent":"Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1"
                        }
    ####     INITAL REQUEST     ####     
    search_response=requests.get(search_url,headers=headers)
    soup=bs(search_response.text,"html.parser")
    raw_results=soup.find("div",{"class":"page-content content-module"})
    result_list=raw_results.find_all("a")
    print("S.N"+" "*10+"City")
    for sn,i in enumerate(result_list[:-1]):
        print(sn+1,") ",i.text.split())
    link_dic={}
    for sn,link in enumerate((raw_results.find_all('a'))[:-1]):
        link_dic[sn+1]=link.get('href')
    if len(link_dic)>0:
        found=True
        break
    print("WRONG CITY INPUT")

####                CITY SELECTOR               ####
e= False
while not e:
    print("\n"*5)
    choice=input("Enter the S.Nof city i.e1,2,3,4,5... :-")
    try:
        choice=int(choice)
        e=True
    except ValueError:
        print("☺☺!!Please enter only a number!!☺☺")




####                PARTIAL DATA  PAGE              ####


search_response=requests.get(universal+link_dic[choice],headers=headers)
soup=bs(search_response.text,"html.parser")
raw_results=soup.find("div",{"class":"content-module"})
#result_list=raw_results.find_all("a",{"class":"cur-con-weather-card card-module non-ad content-module lbar-panel"})
result=raw_results.find("a").get('href')


#####                                  FINAL DATA PAGE                               ########


search_response=requests.get(universal+result,headers=headers)
soup=bs(search_response.text,"html.parser")
raw_results=soup.find("div",{"class":"current-weather-card card-module content-module"})
if raw_results!=None:
    data=[]
    for i in raw_results.text.split("\n"):
        if i!="":
            if not i in data: 
                data.append(i)
else:
    data="☻☺!!SORRY THE DATA OF THIS REGION AREN'T AVILABLE RIGHT NOW!!!☺☻"


print("\n"*2)
pprint(data)




###################################################


#               #    #####         #       ########   #    #     #####    #####
#               #    #                 # #              #            #    #    #               #         #
#      #      #    #                #   #             #            #     #   #                #       #
#   #   #   #    #####     ####            #            ####    #####     # ###
# #       ##     #              #       #           #            #     #     #              #     #
#            #      #####   #        #           #            #     #    #####     #       #


###################################################

























