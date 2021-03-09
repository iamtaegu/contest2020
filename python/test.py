from selenium import webdriver
 
path = "/Users/imac/Desktop/contest2020/driver/chromedriver"    #ex. C:/downloads/chromedriver.exe
 
#조금만 기다리면 selenium으로 제어할 수 있는 브라우저 새창이 뜬다
driver = webdriver.Chrome(path)

driver.get("https://www.naver.com")
print('test')

driver.implicitly_wait(3)

print('test')