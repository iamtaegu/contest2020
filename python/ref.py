import time
from datetime import datetime
 

from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC 

"""path = "/Users/imac/Desktop/contest2020/driver/chromedriver" """
path = "/Users/taegtu/Desktop/contest2020/driver/chromedriver" 

driver = webdriver.Chrome(path)
driver.get("https://www.diningcode.com/list.php?query=%EC%9D%84%EC%A7%80%EB%A1%9C")

titles = '' 
btxts = driver.find_elements_by_css_selector(".btxt")
for btxt in btxts:
	titles = titles + ',' + btxt.text

contents = ''
ctxts = driver.find_elements_by_css_selector(".ctxt")
for ctxt in ctxts:
	if(len(ctxt.text)==0):
		continue
	contents = contents + ',' + ctxt.text

print(titles)
print(contents)

"""
button = driver.find_element_by_id("div_list_more")
button.click()
for i in range(9):
	button = WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.ID, "div_list_more"))
    )	
	button.click()
	print(datetime.now())
"""