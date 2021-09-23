echo Enter the commit name
read name
cd %projectPath%
git add .
git commit -m $name
git push lesson create_frontend