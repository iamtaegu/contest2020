from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC 

path = "/Users/imac/Desktop/contest2020/driver/chromedriver"    #ex. C:/downloads/chromedriver.exe
 
#조금만 기다리면 selenium으로 제어할 수 있는 브라우저 새창이 뜬다
driver = webdriver.Chrome(path)

driver.get("https://www.diningcode.com/list.php?query=%EC%9D%84%EC%A7%80%EB%A1%9C")
btxt = driver.find_elements_by_css_selector(".btxt")

titleEles = driver.find_elements_by_css_selector(".review-content")


button = driver.find_elements_by_css_selector(".more_btn")
infos = driver.find_elements_by_css_selector(".info")
btxt

while 1==1:
	if(len(button[0].text)==3):
		button[0].click()
		WebDriverWait(driver, 3).until(EC.presence_of_element_located((By.CSS_SELECTOR, '.more_btn')))
	else:
		break


f = open("./test.txt", 'w')
f.close()