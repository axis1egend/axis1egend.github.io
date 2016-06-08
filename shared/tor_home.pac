function FindProxyForURL(url, host)
{
    if (isInNet(host, "192.168.1.0", "255.255.255.0") || 
        isInNet(host, "10.10.1.0", "255.255.255.0") || 
        isInNet(host, "172.16.0.0", "255.240.0.0") || 
        isInNet(host, "127.0.0.0", "255.255.255.0") || 
        shExpMatch(host, "*.local"))
    {
        return "DIRECT";
    }

    return "SOCKS5 10.10.1.29:9152; SOCKS 10.10.1.29:9152; DIRECT";
}