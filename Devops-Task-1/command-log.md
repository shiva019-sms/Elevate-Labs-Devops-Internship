# DevOps Task 1 – Linux Environment Setup & Exploration
## Command Log File

---

## 1. System Information

### uname -a
Linux Ubuntu 6.17.0-12-generic #12-Ubuntu SMP PREEMPT_DYNAMIC Fri Jan  9 20:46:52 UTC 2026 x86_64 GNU/Linux

### lsb_release -q
No LSB modules are available.
Distributor ID:	Ubuntu
Description:	Ubuntu 25.10
Release:	25.10
Codename:	questing 

## 2. Directory Navigation

### pwd
/home/ubuntu/task-1

### ls
command-log.md  summary.md  screenshots  README.md

## Navigate to Root Directory
### cd /
### ls
bin  boot  dev  etc  home  lib  media  opt  proc  root  run  sbin  tmp  usr  var

## Return to Home Directory
### cd ~
### pwd
/home/ubuntu

## 3. File and Directory Operations

### mkdir test_dir
### cd test_dir
### touch file1.txt file2.txt
### ls
file1.txt  file2.txt

### cd ..
### rm -r test_dir
### ls
command-log.md  summary.md  screenshots  README.md

## 4. File Viewing and Editing

### touch demo.txt
## echo "Hello DevOps" > demo.txt
## cat demo.txt
Hello DevOps

## less demo.txt
Displays file content page by page.

## nano demo.txt
This file is edited using nano editor.

### 5. File Permissions and Ownership

## ls -l demo.txt
-rw-rw-r-- 1 ubuntu ubuntu 52 Jan  19 17:05 demo.txt

## chmod 644 demo.txt
## ls -l demo.txt
-rw-r--r-- 1 ubuntu ubuntu 52 Jan  19 17:05 demo.txt

## sudo chown ubuntu:ubuntu demo.txt
Change File Ownership

### 6. System Monitoring

## top
Displays real-time CPU usage, memory usage, and active processes.
(Refer to screenshot: screenshots/top.png)
## df -h
###  Disk Usage
Filesystem      Size  Used Avail Use% Mounted on
tmpfs           718M  1.7M  717M   1% /run
/dev/sda2        51G  6.5G   42G  14% /
tmpfs           1.8G     0  1.8G   0% /dev/shm
tmpfs           5.0M  8.0K  5.0M   1% /run/lock
tmpfs           1.0M     0  1.0M   0% /run/credentials/systemd-journald.service
tmpfs           1.8G  8.0K  1.8G   1% /tmp
tmpfs           1.0M     0  1.0M   0% /run/credentials/systemd-resolved.service
tmpfs           359M  112K  359M   1% /run/user/1000
tmpfs           359M   48K  359M   1% /run/user/0
(Refer to screenshot: screenshots/df-h.png)

## free -m
               total        used        free      shared  buff/cache   available
Mem:            3588        2146         203          56        1398        1441
Swap:              0           0           0

(Refer to screenshot: screenshots/free-m.png)

## htop 
Displays an interactive, real-time view of CPU usage, memory usage,
and running processes with a user-friendly interface.

(Refer to screenshot: screenshots/htop.png)

----
