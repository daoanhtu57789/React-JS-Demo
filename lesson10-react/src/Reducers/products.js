var initialState = [
    {
        id : 1,
        name : 'Iphone X',
        image:'data:image/jpeg;base64,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',
        description:'Sản phẩm do app sản xuất.',
        price: 5000,
        inventory:10,
        rating: 4
    },
    {
        id : 2,
        name : 'Samsung Galayxy A9',
        image : 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIQEhIQDxAQEBUVFhIPFRUQFRAPEBAQFRUXFhUVFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OGhAQGy0dHyUuLS0wLS0tLS0tMC0tLSstLS0tLS0tLS0uLS0tLS0tLS0tLS8tLS0tLS0tLS0tLS0tLf/AABEIAOEA4QMBEQACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAAAwECBAYHBQj/xABJEAABAwICAwkMBgkFAQEAAAABAAIDBBESITFBUQUGByIyYXGBkRMXNFJydJKhsbPB0kJUYpOy8BQjJCVDZHOC0TM1U4Ph8UT/xAAbAQEAAwEBAQEAAAAAAAAAAAAAAQIDBAUGB//EADgRAAIBAgQCBwcDBAIDAAAAAAABAgMRBBIhMUFRBSIyYXGRsRMzgaHB0fAUQuEjUmJyBoIVJFP/2gAMAwEAAhEDEQA/AO4oAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgI6idsbXSSODWtBe5zjZrWgXJJ2WQHL92OF9rJTFBTkCwIfPdriDoPchYtB5zfmCvkIuYsfCzLbjfoYPM2b50yEXLu+zJ/KejN86ZBmK99mT+U9Gb50yC477Mn8p6M3zpkGYd9l/8r6M3zpkFx32X/wAr6M3zpkFx32ZP5T0ZvnTKLlO+zJ/KejN8yZBctfwtyixtSEZ3AEwcdluNZMoue9vR4T4a2RsUsRhLnCNsgdjhMh5LHa2OdoF8icr3IBq0SmdACgkIAgCAIAgCAIAgCAIAgCAIAgCAIDVOEmpcyka0aJKilhdzsdK3EOg2seYlTHchnAt+R/eFVfxz7VoVPLv0er2IBdAVugF0AugKICqAogKhpOTQSTkAMyTzBAe3uHE+nhqmOBa+VgEZaRxHhwcC4nNtiL3AKi5KR2On4UKQNb3SOpxYRiwsjw4rca3H0Xus7FiTvp0P/HVehF86mzBQ8KtD4lV6EXzpZgp31qHxKr0I/nUWYKd9ig8Sp9CP50swU77NB4tT6EfzpZgp32tz/FqfQj+dLMA8Le5/i1XoR/OlgZFFwp7myEB0ksF/pTRuDB5T23DRzkgJYG6RyBwDmkOBAIIIIIOYIOsIC5AEAQBAEAQBAadwpeCweeUXvQpjuQzg+/L/AHGq8s/FaFTxZjxXF39tg3CR0jO6EkkZyHQhBcCgF0AugF0AugF0BmVLzBAwtJa+cvu4XxNhYG2Y06sTnknbhCqyUeI63T06VGpJG63MgInFvMhJE7DzI7kFpwc/Vb/CqSWPLdSAkjMeF2IHF9EjqyI2afUpsCBQAgJaaodG4OY4tIzy+I1oD6X4E90nS0skR5EZjkjGnucczMRjHMHtktsBAQHRkAQBAEAQBAEBpvCn4LB55Re9CmO5DOD79D+8Kryz8VoVNfqG3BIvlkTlhub5abjknTpshJkxnIdCEFyAIAgF0AQFCUB780QLKYkXsyW188y5mfqXf0dTUqjbWxrTQsvayR5I3sZFNFfUOwK8YLexrCK3PQjaNg7AtMseSNrIyoWDYOwKHGPIhpGUxo2DsCzcI8kUsieNo2N7AqOEeSIZLhHit7Aq5Y8iliM28VvYFZU4vgUa1KxtAF8LewI4RvZJGiii79HY9pEjGPa7ilrmtIIOm6pUpwl1bFZWPb4EYgxtWwaG9wYL6bNMwHsXzFRWk0ch09UAQBAEAQBAEBo3CvU4YaSOxJkraYA5Wbgfjz7FaO5DOGb9/D6ryj8Vcqa3PIbas9dszbnQGcw5BAVugK3QC6ApdALoChKA2R/+nT+RJ+Jq9Lox9aRtS4lrBdeyld2N4q56MDbBbLV6bHTFIyWq1ixkRKrKsyYys2VZkMVGUZcSqpFSF5/wtoriCUnMBZ7JsutCS+YA5gs0+Jk9T3OBj/8Ab0w/imXy9Xty8Wcr3OmKgCAIAgCAIAgOfcLvJ3O89i9hVokM4nv5P7fV+U74q5Q1uV4wnPPIAXy13u3UdHrS6JM1pyHQgK3QC6AXQC6AXQAoDZZP9On8iT8TV6XRfakbUuJJTMzC9yKssx101ZGcxaxVkbLRErVJYmYVVorYyYis2VZlNKoZsoXJYqRMOfrV5aRJSJGO0lZTWlhPYkhOvaqS5FbHu8DEoxVjcQxHuTg2/GLQ+YE22XIHWvl6vbfizle509UICAIAgCAIAgOfcL3J3O89i9hVokM4lv78OrOl3xVyprM0QwYvzrUE2M8H2D2KSBdACL6f/qAo8DYEBc45lAUugBKA2dw4lOPsSDrxNXpdF6zkvA3o8TIpRpP5/Ole9V0aijrXBGSw59S3sbIlCqSSNKEE8Tlk0VZkteqWKWLXPVkiLEcbtPQrS4CxfiyssWtSr3J4nZhZWIZ6XA54ZU/0G+/evmKvbfizje515ZgIAgCAIAgCA0XhZpsUNHJe3c62mytysbsGnVa91MSGcL39C+6FUPtH4rQqeLJue4MD3RyBhtZxDgw3vax1jI9ijS5JW6kgXQFCUBcSOftQFLoBdAUcUBtbuRD5M3vAvU6H1qtG9Iyom2YOfPqsPiSvam71mdFN3k+4vY7Ndj2Oi5kBZ2JKgqASMcosVZO16o0VZR7lKII2P0qzQJA/R0LJoq0TROzCyaKs9rgb8LqPN2+/evlKvbl4v1ON7nXVmAgCAIAgCAIDS+FZ4FNTgkXNZR2F83WlBNhryzUx3IZwTfz/ALhU+WVoVI6nfDNJSsonYDGzBhNj3SzCS0XvYDPZqVVBKWYtmdrHkqxUXQFLoBdAVugCAo5Abc0XZD/Smd1lwPtXr9De+Za9l8UZ1TkIRtiv7Lr1KavKb70dGEfb/wBmQuy6rHqXoLVI6ISvFGUwrM1uXoSUuosVZe16hoqy4lEiCMuzVrAuD9HYs2irMiJ2hZNFWbHwNQu/SKiS3FELGE5ZOM0hA26AV8hW95Lxfqcj3OtLMgIAgCAIAgCA59wv8nc7z2H4qYkM4jv6P7wqvLPtK0Knh3QFboDNoq5rI5Inte4PcDZpDW2yBvr0A5Zjo0oDLdu4C5zix13YCc28pmLCeq7ewoCB26TSAML+VIdLbBr8egazxxp2HPYBR26YIcMBzc54uRld+Kx6gB1IDFq5w92IXGQHGNz0oCAlAbdC6zaYnR3N4PQXC69Toh2qSZooOUZJbmaG4mwNJzY51MTsxcgnpOHtXs29nXnykror7RwhOce6X3KOYSDlxmXxDXhvY9h08x5l1wla3J+p1KcYyTXZns+/+SlO/V2dCvJcToi9bGSCqWLFCUsRcoHIQy9r0IKOzSxFy26NAlhkWcolWjeeBXk1X/R+KdfF1veS8X6nG9zpqyICAIAgCAIAgNH4WKcGnpZDe8dbSWtoOOQNN+oqY7kM4Pv6/wBwqfLPtWhU8NAEAugCAIAgCAoShBtzG3ZTjWYn29Jt16vRPbkdFHe5MyXS14JBGB41lo0OH2m+sXXuZM8bbSWqf0LOFutHb8uviZwkJIkxDG22NwsWvGhswGtrhxXDaedZxn1XFq3dy7vsY0oRSeHl2H2Xy45fFcOZbV04bx2ZMJtpv3F5+iT4h+i7X0hdOHrqpo9/X+TSlUlf2dTtLjzXNfVFsb9unWtGkdkZZlYkUElpUgtLlNirZe16WIBCgFGmxVWrg3DgXkd+kTNucJp432vkXCaQA222v2r4ev72Xi/U4nuzrqyICAIAgCAIAgNM4VfBIfPKH3zVMdyGcA39/wC4VPln4rQqeHdALoBdALoBdALoBdAUJQG2vp5Hx07o2OfgieXYRctBc2xtp1Feh0dbNK5eFeNJ9Z2vzMujrYpR3OcEHU5vFkaejWF6jrzp9rVGs8NUfXwslf8Atez8DIlpXxDED3WMEkSRaWE5Elp5N7m4Nwb57V0wq066vF2f5oznVZSfsqsXTl/a/VMmo6i2jC4EFpGZY5p0tsTfD9k5jUcg4c9alKLzw0fL6o6JQ9ossnZrZ8S2enDQXxklgte+b4b6A+3KZsdbp5+zDYuNZZXpLlz/AJIUpxlaXa+T8O/uLQV0HRTqKfiCpRcjcrkFt1NgXteoaIJAbqgubnwLUpMk81xYQxRW13Msrr9GS+Fr+9l4v1ON7nWVkQEAQBAEAQBAaZwreCQ+eUPvmqY7kM+ft/Z/eFT5Z+K0Knh3QC6AXQC6AXQC6AXQFHFCGbXK97WUr48YLY38ZmK7eM3W3RoXo9GaykXSpvqztZ87fUkdu3iyqGxTf1WBr/TbhPbdeq49xVYKMdaUnDwd15O/yJKXdKJpvFJNTnpbUxdB5LgPSWMsLFvNHR92hvKeIcPZ1lGtHv0a8N/k0ZzXsku4YA7W+m4zXc74DZ3W1bQrVY9Wosy5mPZXUv8A6z+k1p5krJHNs7EARkJGHEw7WuuNfiuHbdKmHjN5obmka0KnUl5Pf4P7F2EfRbhOkxi5FtJdHrLdZZmW6RcZLejiG+rU0fPn+c+JSonTd735P79/fxI3ttmMwdB+H50rtTOqjXVRWe63I3K6NSMhWRBbdSQSxvUWDOicCXIqeiD8U6+Ar+9l4v1OR7nTlkQEAQBAEAQBAaXwr+CQ+eUPvmqY7kM+fd/R/eFT5RWhU8K6AXQC6AXQC6AXQC6AEoDom4dQY2xkVEdP+qzMjsOLj6ALHFbZzr0OjMuaV1c5MYqbilOk6vJLgZsu7LbEmrMo1ltK0t9OTCPWvXz01+35nHHAZtYYfJ41HfyMcV0UuinfN0U1M6/oOPtR1Uv2/NkvCVIbVYw/7stko6c5uoKuPXijjLLdWM+xV9rHwLxeMjpCvTn3Nr6kLYs/2eoEh0dzqf1MxGxr3AB/QRZXjUjujb280v8A2KTX+UesvkGTC+B7XRubngdxHxkaHN2dRtstoW7hGqtNzup1Lx3UosyA/TcaeVbIH7bRqz0jUeYm1qUnfJLfgZyg4NSh8PsyGRuE2Oew7RtXXF3PQp1VUjmRG4q6LEZVwUa5TYHSuBHkVPk0/tnX57iPey8X6nG9zp6xAQBAEAQBAEBpXCz4HF55Re+apjuGfPe/g/t9R5R+K0KHiXQC6AXQC6AXQC6AXQFCUB0Hcqlie2J1RN3JjIr5AOc8l4ybcG2jSBrXbgZxjKV1c5sVUxailhYZ2+eiXe2egK2Jh/ZKVpOqaqvK/wDtbp9a9KVZpXk8q+ZWj0JicTriqzf+MNF58fzUo/dKZx/WVMh+zCAxrfRsLdLlyTxH9kb+J69HoHo+hq4Jvv63qRirYOVJKDzzSX9RI9atB4ySvBLyZ1PD9HrR0o+USU1LJBhMhePFlHdmnrcMu0KZTxMPeU0+/ZmbweC3hem+5/TVfIw67c8uYMDrAZtOIviafsuPGi6yW84XTQxUJOy35PR/B8TmlgpUL1I2nHi47/GK38Vr3GJRVLsRje0te3S0ixI2j82z51339quUkZRlC194syZTlYZ24zTtacyF1UZ51fjxJpxdOpbgyFrl0WsdIKIFqsiTpfAjyKjyaf2zr89xHvZ+L9Tje7OnrEBAEAQBAEAQGk8LfgcXnlF74KY7hnz1v3P7fUeV/laFDw7oBdALoBdALoBdALoChKA3ujaC2AkA2ida+gcYata6MLUlBvLuzuwUU5O6uZLnbch2c9vzoXRGLnLmz1JPIiwMe8ta1rruIDGMBxvOi/N7fh7dDC0qEXOer5vZHmzrXbd7Jbs2OHelHGMVZUFmV+5QYbt8p+j1da5HjKlaVqSv3vb4Hk1MfJvLRjfvZizDc5uTW1R+014+IsuiOFxEtXYvBY9q94+Rh4Ir4qSrLHeJVN7mH8xfyT12VZ4GduvC65rdHTDEYmi7zh8Yu/y5EckImOBze4TR5gOyw9B1xH1Xvo0Y05Sg1GTvyf0feWrxhKLr0ldfuiuK/uXeuKLZozkSLEk5H6MgNpGHrz6yu2nWtNT4S0fiYUKsZpwvdx2fOL2fwMNzbW2En4H4r1rnZF30KtdzlRY1sXtNzkgsdK4EuRU9FP8AinX57X97LxfqcL3Z05ZEBAEAQBAEAQGkcLvgUXndH70KY7hnzxv18OqPKWhQ8SyAIBZALIAgCAIChQG/UfIh/pH8QV6O56PR/bkZMbMbj4rOVs0i/r/Cdq9/B08kM7/GWxVXhzNw3tUHc293cLSzA4b/AMGDb0kfDaVy4yt7SWT9q+bPJryzf009EW7q0T5jhbk3nvxjtO1b4atGmrvc56eIhSd7X/PUwoN64PKeTzMHxXa+kLLREVemKm0IeZWp3qxWtikaemN3aFan0jPkZx6Uxd9VFnjVe5z4sLHvBAuYZf8AjOktOsNte7TlbMaCrVlDELMlZ8vz5M7KGMTlnisr4r8/OZl0h/SoHxloErLm2WLEyzXNO0jJt/Fc1cKk8ri9/wA/PE8/GRXR+Nhioe6qaPkm9/uebFH3WKQjNzOMdpw8rLyXYv7gvSw2IzKLfgz1J1fY1437L089iGKO4v0aLZnSTddspWdj1HotSdjAOa5AAGZJ2DaVnmuw2oq7OhcCXIqeiDn+lOvgq/vZeL9Tzr3bOnLIBAEAQBAEAQGj8L3gUfndH70KY7hnzvvx8Nn8paFDx7IBZALIBZALIBZALICjhkgN/oOTEToELnHoaQT7Frh05VFFHfgnZT8D1NxqQyRtbrlmDL7WsADveOX0leSpxS5I5K8v6z7kb4SLvIyAtG22prV4WtkvizhWt2IYsWZybza1srLxOSrJLqwL5ZbDC0W5h/4tYwvqzkUfguZhzRj6RudJFxhb0k5fnWtoyfAQqTl7pWXN7swa6jxNIbxr/RuMzpGE/Rds57LanVafW8zpg5pp1PPl493M1V8jqeRs7DbDhDiRYADiteRsscB2AjSW3V8TD96PU9lDE0pYWts/k+aLnVAZO+WAHLjSRaXMBuTl9LCS8G2lrmkaAuenUVN69mQp4KpWwnsa660erfmls0WubTZviqWxNOZY4CQNOxpuLcwOa9RYvq9az77+pSnicbTXsp01Pvvbz7y2R4AxMxgHid1kykk+xE36I6PWuGvjnPqw+X5udlKhVm1Ktb/VbfE37gR5FT0U/tnXzVXtsq92dPWZAQBAEAQBAEBo/DB4DH51R+9CmO5DPnffd4ZP5S0KnkIAgCAIAgCAIChQG807rRM54gzteCfU0ru6Np56y7jrw27Rum9umt+jXHJjdMeZ0hJ9hC9PHzu5eRw1pXlJ99vI2KNtwG7TiPMF5r3ucblaNySSQaBoGVlenG71ObK2zHcbcbWchzc/qPUOdb9p5eBz1Y+1mqS2W5iVVQI8JDBLI4nuTHZNy5Ush8UesreEczavZLd/RHWoW02S3f0RA+WpAxSSwTA/wy1kItsY8G4Oy4sruFJ6JNd+/mVpzp3tGMl37+Zg7pU7ZQZWAnS2RjhZwNuMHN2207dINnEq9OTj/Tn8DqpTssr4bP8APl5GvGEtsBeRoIwFrzFPFbQ0O+kBnYEEi+oLnq4ScZOUVc9iniouNqmjJ3bphgH6iMO/5KjueI8+BjRc9SxhgK9SWiaXyOj9RBrq9YxpcRPdJ3PJIsAeLK8H6LG/wmc+k6gvUw+FpUNb3fyX3ZyurOq7Q/hfd9x0HgR5FTlbi0+WoZz5L5Ou71JeL9TG1mdPWQCAIAgCAIAgNG4YfAWedUnvApjuQz5331+FzeUtCp5VkAsgFkAsgFkAsgFkBQhCDdYIi8U7RrjwDpc5o/yvV6H9629krnXQdrs6ZufFa9tgYOgCw9itiJ5medJ3lY9B77aFzxV2c2VtGOXXNl0pWRFrXYBxP0gAazoB0knoFvWpinGNzGnTUFfi9TU91N2c3SNBxS2DBrZTjKJnSeUdpcvXw+HSXWei1fjxZ6eHwud66pevFkcO4srxikkcHHUNXMdXUvBxH/KqNOpkpQzJcXxPbhg9NWSGkqojiaceQF9ZA0AjWNmsarLaj0/gMQstTqPv28zmqdGJsgkhLzd1O4O1ljnsv1aPzndd6x1CCvGqreZSGAqR0UtO9E9HuU7F+riax2m+ckvTd18PSLLnrdLwa3cl5L+TZYL/AOkr92y+R6FPuM0EH/UeTm7lDFrDb8o7ToG1eZWxs6mtR5Y8tm/svmzpUFFWR7/A0236YNhiHY+oC892eqPKl2mdLUFQgCAIAgCAIDRuGLwBnnNL7xTHchnzxvn8Km8paFTy0AQBAEAQBAEBRyA6XvQpQ98bj9CG42Xc4C67sBUcc6XFImU8iZvsIstajuckLu5bI5IIlqxEx2krd8iqhdqKPO3WqsEDrmxk/V/2u5Z9AO9S6qNPNUXd+epo6easorZHhb3aYzSuneMmmzRqxnR6I9oXD/yjH/psOsNB6y38P5Z9DhaVlc2prbacho/99navz1NaXOxdZsw8NQSSHNbsDcJFtWZzX1FOXREIJJZnzfMyan4EsFFM7lEv6XlrexmfrVqmMwEPdxS+H3K68zPjpQOI4g7YohhYOd+dz/ceorllim1misv+UtX8F9iLX0WpnU7QDfK+XQB+egbAFxyquT/Ls0VOxDwQcqu8tnvKhektkeFPtPxZ0hSVCAIAgCAIAgNH4YfAG+c0vvApjuQz533yeEy9K0KnnWQCyAWQCyApZAVsgFkBRwRA6lvE0/8AS38S6MLo2UqptWNwLl0N3EI5UQyOW9OJm1ciqHWbZaxV2b4eHWcmanvgqzLIImZ2swAa3G1/YB2r18LGNKm6s9Fv8DowtJtuRtO5NCImMiGrSdrtL3L8o6Sx0sdi5VXs9vBbHvWVKFjP/RznjLGtuSMruF9Q1agudLiYxnyvfiX3a3ktx+WbD2ZdQW1PLxdvn+eZKjNglzuU828WO7B1uviPaOhdMZxXYjrzevy2NFS5lQ8NFha2xuQUqMpO8ncvZLYs7qSRs2BdMKaWxUl4HtNb5UfvKhdy2PnqnbfizpKFQgCAIAgCAIDRuGLwBvnNL7wKY7kM+ed8HhEnStCp59kAsgFkAsgFkAsgFkBQhAdQ3i6T/Rb+Ja0Hqy61Nsc6y7KcbspJ8CIbSupaaFYwuzx92a/ACdmQ53Lrw9HNZHbltHKY29Xcsn9pk13LL7Nbz8F4P/Kel0o/oqL/ANren3PTwlGyzM2iF+sDTrOgD4r4ZLKrcTacXN3exTFsuTt/OhbU6UnuXUVHuK2PR2LshSSL50Vw7V0KIzCy1jEjcN0rVIqzI4HdNb5UfvKhdB87U7cvFnSUKhAEAQBAEAQGo8KVA6fc6XAC4xOiqbC5JbE8OfYazhxHqUx3IZ82btuBmeQQQTcEaCFoVMHENqAYhtQFcQ2oCmIbUBXENqAYhtQFMQ2oAXDagOn7xtJ/os/EtsOtWWNpcvQjpsSqTlqzB3RrmsBz/wDF10qTk9TohZI8vczct1U4TTAiIHitP8T/AM9q4umOmYYGDoULOo+PL+Tsw9BzeeWxtT2iwvo2DX1L8/jGUpOT1b4np+BEQXarDZ/ldNOjlVyl0SiDnXRGJCZfgWqiLlLLZIlFjldIsWtOYV0hYyeB3TW+VH+OoWp83Pty8WdJQqEAQBAEAQBAUIvkgOdbucDlBUPdJE6alLiSWxFjornYxwNhzAgKykRY8jvFwfXZvuokzCxXvGU/12X7qL/KZhYd4un+uzfdRpmFireAunvxq2cjXhjiB6ib+xMwsSd4yj+t1fZT/ImYWIu8XB9dl+6j/wApmFh3jKf67N1RxXtzJmFi5/AZTXOGsnA+1HC49oA9iZhY59vnrJtxqoxwEPEbpKV3dGnDI3DDIwkA5HC9pBHPzq0Kjg7osnY86ThKqT/BgHQJPmXTHGyjwRZzbMF2/aVzg58MLwDfCcYaemxWsuk6zg4xsu8tCpl4Hq99Sp1U9MNQsJLAbBxsl4DwMJNttts6Vj5rginfSqddPTH735ldYSC2Dx9Tki4cKtT9XpuyX5lb9PEr+uqF3fYqfq1L2S/MrexQ/WzHfYqvq9N2S/Mp9kh+tnyLDwqVP1em7JfmVsiLLH1ORaeFKp/4Kbsk+ZTlJ/8AIVOSLX8J9VY4Yadp1GzzY7bF1kyh9IVGrWOt8BrHdwnc+9z+jtcTpMmB0jr8/wCtb2q7OA6coAQBAEAQBAEAQBAEAQBAEAQBAEAQGh8IfB2zdM91je2KUhrH90aXRTBl8BNs2PbicA8anEEHKwHMJuBGuBNhA4asM5zH90YQFveSrvFi+/b8iAr3ka7xY/v2/IgHeRrvFj+/b8iAd5Gu8WP79vyIB3ka7xY/v2/IgK95Gt2R/fN+RAO8jW7I/vm/IgHeRrdjPvmfIgM7crgPqcYMz6eNoIN3OfOfQDWg9brIDtO9zcSOhgbTw4iAS5z32L5ZHG7nuI1k7MgAAMggPUQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAf/Z',
        description:'Sản phẩm do Samsung sản xuất.',
        price: 2000,
        inventory:20,
        rating: 3
    },
    {
        id : 3,
        name : 'Iphone XI',
        image : 'data:image/jpeg;base64,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',
        description:'Sản phẩm do app sản xuất.',
        price: 7800,
        inventory:19,
        rating: 5
    },
    {
        id : 4,
        name : 'Xiaomi note 4 pro',
        image : 'data:image/jpeg;base64,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',
        description:'Sản phẩm do Trung Quốc sản xuất.',
        price: 150,
        inventory:100,
        rating: 3
    }
];

const products = (state = initialState,action)=>{
    switch(action.type){

        default:
            return [...state];
    }
}
export default products;